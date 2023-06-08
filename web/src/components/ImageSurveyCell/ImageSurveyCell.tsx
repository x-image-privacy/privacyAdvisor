import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  StackDivider,
} from '@chakra-ui/react'
import {
  FindImageSurveyByUserAndImageIdImage,
  UpdateImageSurveyMutation,
  UpdateImageSurveyMutationVariables,
} from 'types/graphql'
import {
  IS_PRIVATE_QUESTION_GROUP_A,
  MILESTONE_GROUP_B,
  NUMBER_OF_IMAGE,
  PRIVATE_ELEMENTS_QUESTION_GROUP_A,
  PUBLIC_ELEMENTS_QUESTION_GROUP_A,
} from 'web/config/constants'

import { FieldError, Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedInputTagField from '../OpenEndedInputTagField/OpenEndedInputTagField'

type ImageSurveyProps = {
  imageId: number
  userId: number
  onFinished: () => void
  onPrevious: () => void
}

export const QUERY = gql`
  query FindImageSurveyByUserAndImageIdImage($userId: Int!, $imageId: Int!) {
    imageSurvey: imageSurveyByUserAndImage(userId: $userId, imageId: $imageId) {
      id
      user {
        id
      }
      image {
        id
      }
      privateRank
      privateElem
      publicElem
    }
  }
`

const CREATE_IMAGE_SURVEY = gql`
  mutation CreateImageSurveyMutation($input: CreateImageSurveyInput!) {
    createImageSurvey(input: $input) {
      id
      privateRank
      privateElem
      publicElem
    }
  }
`
const UPDATE_IMAGE_SURVEY = gql`
  mutation UpdateImageSurveyMutation(
    $id: Int!
    $input: UpdateImageSurveyInput!
  ) {
    updateImageSurvey(id: $id, input: $input) {
      id
      userId
      imageId
      privateRank
      publicElem
      privateElem
    }
  }
`

const UPDATE_USER_IMAGE_SURVEY_ = gql`
  mutation UpdateUserImageSurvey($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      milestone
    }
  }
`

interface PlainImageSurveyValues {
  [IS_PRIVATE_QUESTION_GROUP_A]: string
  [PUBLIC_ELEMENTS_QUESTION_GROUP_A]: { tags: string[]; input: string }
  [PRIVATE_ELEMENTS_QUESTION_GROUP_A]: { tags: string[]; input: string }
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: ImageSurveyProps) => (
  <ImageSurveyComponent {...props} />
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindImageSurveyByUserAndImageIdImage> &
    ImageSurveyProps
) => <ImageSurveyComponent {...props} />

const ImageSurveyComponent = ({
  imageSurvey,
  userId,
  imageId,
  onPrevious,
  onFinished,
}: FindImageSurveyByUserAndImageIdImage & ImageSurveyProps) => {
  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation<
    UpdateImageSurveyMutation,
    UpdateImageSurveyMutationVariables
  >(UPDATE_IMAGE_SURVEY)

  const [updateUser] = useMutation(UPDATE_USER_IMAGE_SURVEY_)

  const onSubmit: SubmitHandler<PlainImageSurveyValues> = async (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_A])

    // The data returns an object with tags and input, we need a single string with the tags.
    // https://stackoverflow.com/questions/52936112/react-js-need-to-split-the-state-object-being-retrieved
    const publicElement = data[PUBLIC_ELEMENTS_QUESTION_GROUP_A].tags.join(' ')

    const privateElement =
      data[PRIVATE_ELEMENTS_QUESTION_GROUP_A].tags.join(' ')

    if (imageSurvey && imageSurvey.id) {
      update({
        variables: {
          id: imageSurvey.id,
          input: {
            privateRank: privateRank,
            privateElem: privateElement,
            publicElem: publicElement,
          },
        },
      })
    } else {
      create({
        variables: {
          input: {
            userId,
            imageId,
            hasInterface: false,
            privateRank: privateRank,
            privateElem: privateElement,
            publicElem: publicElement,
          },
        },
      })
    }

    if (imageId >= NUMBER_OF_IMAGE) {
      await updateUser({
        variables: {
          id: userId,
          input: {
            milestone: MILESTONE_GROUP_B,
          },
        },
      })
    }

    // if (valueUpdate)
    onFinished()
  }
  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Flex direction="column" gap={4} alignItems="center">
        <Stack
          direction="column"
          spacing={4}
          alignItems="start"
          divider={<StackDivider borderColor="grayIcon" />}
        >
          <Box>
            <LikertScaleQuestionField
              name={IS_PRIVATE_QUESTION_GROUP_A}
              n={5}
              question="Would you consider this image as:"
              text={[
                'Private',
                'Likely private',
                'Undecided',
                'Likely public',
                'Public',
              ]}
              direction="column"
              value={imageSurvey?.privateRank.toString() || ''}
              validation={{
                required: {
                  value: true,
                  message: 'Image privacy question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={IS_PRIVATE_QUESTION_GROUP_A}
              className="rw-field-error"
            />
          </Box>

          <Box>
            <OpenEndedInputTagField
              placeholder="Answer here"
              value={{
                tags: imageSurvey?.publicElem?.split(' ') || ([] as string[]),
                input: '',
              }}
              question="Which elements do you consider as public in this image? (3 words)"
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_A}
              validation={{
                required: {
                  value: true,
                  message: 'Public elements question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_A}
              className="rw-field-error"
            />
          </Box>

          <Box>
            <OpenEndedInputTagField
              placeholder="Answer here"
              value={{
                tags: imageSurvey?.privateElem?.split(' ') || ([] as string[]),
                input: '',
              }}
              question="Which elements would you feel uncomfortable disclosing in this image? (3 words)"
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
              validation={{
                required: {
                  value: true,
                  message: 'Private elements question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
              className="rw-field-error"
            />
          </Box>
        </Stack>

        <ButtonGroup spacing={4}>
          <Button onClick={onPrevious}>Previous</Button>
          <Button type="submit">Next</Button>
        </ButtonGroup>
      </Flex>
    </Form>
  )
}
