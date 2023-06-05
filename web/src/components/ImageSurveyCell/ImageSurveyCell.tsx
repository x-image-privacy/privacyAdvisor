import { SyntheticEvent, useCallback, useState } from 'react'

import {
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
  onFinished?: () => void
  onPrevious?: () => void
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
  [PUBLIC_ELEMENTS_QUESTION_GROUP_A]: string
  [PRIVATE_ELEMENTS_QUESTION_GROUP_A]: string
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
  const [tagsPublic, setTagsPublic] = useState<string[]>([])
  const [tagsPrivate, setTagsPrivate] = useState<string[]>([])

  const handleTagsChangePublic = useCallback(
    (event: SyntheticEvent, tags: string[]) => setTagsPublic(tags),
    []
  )
  const handleTagsChangePrivate = useCallback(
    (event: SyntheticEvent, tags: string[]) => setTagsPrivate(tags),
    []
  )

  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation<
    UpdateImageSurveyMutation,
    UpdateImageSurveyMutationVariables
  >(UPDATE_IMAGE_SURVEY)
  const [updateUser] = useMutation(UPDATE_USER_IMAGE_SURVEY_)

  const onSubmit: SubmitHandler<PlainImageSurveyValues> = async (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_A])
    if (imageSurvey && imageSurvey.id) {
      update({
        variables: {
          id: imageSurvey.id,
          input: {
            privateRank: privateRank,
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_A],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_A],
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
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_A],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_A],
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
    onFinished?.()
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
            validation={{ required: 'Image privacy question is required' }}
            errorClassName="error"
          />
          <OpenEndedInputTagField
            tags={tagsPublic}
            onTagsChange={handleTagsChangePublic}
            placeholder="Answer here"
            value={imageSurvey?.privateElem || ''}
            question="Which elements do you consider as public in this image? (3 words)"
            name={PUBLIC_ELEMENTS_QUESTION_GROUP_A}
            validation={{ required: 'Public elements question is required' }}
            errorClassName="error"
          />
          <OpenEndedInputTagField
            tags={tagsPrivate}
            onTagsChange={handleTagsChangePrivate}
            placeholder="Answer here"
            value={imageSurvey?.privateElem || ''}
            question="Which elements would you feel uncomfortable disclosing in this image? (3 words)"
            name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
            validation={{ required: 'Private elements question is required' }}
            errorClassName="error"
          />
        </Stack>
        <FieldError
          name={IS_PRIVATE_QUESTION_GROUP_A}
          className="error-message"
        />
        <FieldError name={PUBLIC_ELEMENTS_QUESTION_GROUP_A} className="error" />
        <FieldError
          name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
          className="error"
        />
        <ButtonGroup spacing={4}>
          <Button onClick={onPrevious}>Previous</Button>
          <Button type="submit">Next</Button>
        </ButtonGroup>
      </Flex>
    </Form>
  )
}
