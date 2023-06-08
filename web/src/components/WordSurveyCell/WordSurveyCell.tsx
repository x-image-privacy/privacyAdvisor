import { Box, Flex, Stack, StackDivider } from '@chakra-ui/react'
import type {
  FindImageSurveyByUserAndImageIdWord,
  FindImageSurveyByUserImageIdAndHasInterface,
} from 'types/graphql'
import {
  IS_PRIVATE_QUESTION_GROUP_B,
  PRIVATE_ELEMENTS_QUESTION_GROUP_B,
  PUBLIC_ELEMENTS_QUESTION_GROUP_B,
  GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B,
  JUSTIFY_VISUALISATION_GROUP_B,
  NUMBER_OF_IMAGE,
  MILESTONE_SURVEY,
} from 'web/config/constants'

import { FieldError, Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedInputTagField from '../OpenEndedInputTagField/OpenEndedInputTagField'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'
import SubmitButtons from '../SubmitButtons'

type WordImageSurveyProps = {
  imageId: number
  userId: number
  onFinished: () => void
  onPrevious: () => void
}

export const QUERY = gql`
  query FindImageSurveyByUserAndImageIdWord($userId: Int!, $imageId: Int!) {
    imageSurvey: imageSurveyByUserImageAndHasInterface(
      userId: $userId
      imageId: $imageId
      hasInterface: true
    ) {
      id
      user {
        id
      }
      image {
        id
      }
      id
      hasInterface
      privateRank
      privateElem
      publicElem
      satisfactionRank
      satisfactionElem
    }
  }
`

const CREATE_IMAGE_SURVEY = gql`
  mutation CreateWordSurveyMutation($input: CreateImageSurveyInput!) {
    createImageSurvey(input: $input) {
      id
      privateRank
      privateElem
      publicElem
      satisfactionRank
      satisfactionElem
    }
  }
`
const UPDATE_IMAGE_SURVEY = gql`
  mutation UpdateWordSurveyMutation(
    $id: Int!
    $input: UpdateImageSurveyInput!
  ) {
    updateImageSurvey(id: $id, input: $input) {
      id
      userId
      imageId
      hasInterface
      privateRank
      publicElem
      privateElem
      satisfactionRank
      satisfactionElem
    }
  }
`

const UPDATE_USER_WORD_SURVEY_ = gql`
  mutation UpdateUserWordSurvey($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      milestone
    }
  }
`

interface WordImageSurveyValues {
  [IS_PRIVATE_QUESTION_GROUP_B]: string
  [PUBLIC_ELEMENTS_QUESTION_GROUP_B]: { tags: string[]; input: string }
  [PRIVATE_ELEMENTS_QUESTION_GROUP_B]: { tags: string[]; input: string }
  [GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B]: string
  [JUSTIFY_VISUALISATION_GROUP_B]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: WordImageSurveyProps) => (
  <WordImageSurveyComponent {...props} />
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<
    FindImageSurveyByUserAndImageIdWord,
    FindImageSurveyByUserImageIdAndHasInterface
  > &
    WordImageSurveyProps
) => <WordImageSurveyComponent {...props} />

const WordImageSurveyComponent = ({
  imageSurvey,
  userId,
  imageId,
  onPrevious,
  onFinished,
}: FindImageSurveyByUserAndImageIdWord &
  FindImageSurveyByUserImageIdAndHasInterface &
  WordImageSurveyProps) => {
  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation(UPDATE_IMAGE_SURVEY)
  const [updateUser] = useMutation(UPDATE_USER_WORD_SURVEY_)

  const onSubmit: SubmitHandler<WordImageSurveyValues> = async (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_B])
    const satisfactionRank = parseInt(
      data[GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B]
    )
    const publicElement = data[PUBLIC_ELEMENTS_QUESTION_GROUP_B].tags.join(' ')

    const privateElement =
      data[PRIVATE_ELEMENTS_QUESTION_GROUP_B].tags.join(' ')

    if (imageSurvey && imageSurvey.id && imageSurvey.hasInterface == true) {
      update({
        variables: {
          id: imageSurvey.id,
          input: {
            privateRank: privateRank,
            privateElem: privateElement,
            publicElem: publicElement,
            satisfactionRank,
            satisfactionElem: data[JUSTIFY_VISUALISATION_GROUP_B],
          },
        },
      })
    } else {
      create({
        variables: {
          input: {
            userId,
            imageId,
            hasInterface: true,
            privateRank: privateRank,
            privateElem: privateElement,
            publicElem: publicElement,
            satisfactionRank,
            satisfactionElem: data[JUSTIFY_VISUALISATION_GROUP_B],
          },
        },
      })
    }

    if (imageId >= NUMBER_OF_IMAGE) {
      await updateUser({
        variables: {
          id: userId,
          input: {
            milestone: MILESTONE_SURVEY,
          },
        },
      })
    }

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
              name={IS_PRIVATE_QUESTION_GROUP_B}
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
              name={IS_PRIVATE_QUESTION_GROUP_B}
              className="rw-field-error"
            />
          </Box>
          <Box>
            <OpenEndedInputTagField
              placeholder="Press enter or space to add an answer"
              value={{
                tags: imageSurvey?.publicElem?.split(' ') || ([] as string[]),
                input: '',
              }}
              question="Which elements do you consider as public in this image? (3 words)"
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
              validation={{
                required: {
                  value: true,
                  message: 'Public elements question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
              className="rw-field-error"
            />
          </Box>
          <Box>
            <OpenEndedInputTagField
              placeholder="Press enter or space to add an answer"
              value={{
                tags: imageSurvey?.privateElem?.split(' ') || ([] as string[]),
                input: '',
              }}
              question="Which elements would you feel uncomfortable disclosing in this image? (3 words)"
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
              validation={{
                required: {
                  value: true,
                  message: 'Private elements question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
              className="rw-field-error"
            />
          </Box>
          <Box>
            <LikertScaleQuestionField
              name={GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B}
              n={5}
              question="Is the word cloud helps you review your evaluation?"
              leftHand="Yes"
              rightHand="No"
              direction="row"
              value={imageSurvey?.satisfactionRank?.toString() || ''}
              validation={{
                required: {
                  value: true,
                  message: 'Word cloud question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B}
              className="rw-field-error"
            />
          </Box>
          <Box>
            <OpenEndedQuestionField
              question="Justify your previous answer:"
              placeholder="Justify here..."
              name={JUSTIFY_VISUALISATION_GROUP_B}
              value={imageSurvey?.satisfactionElem || ''}
              validation={{
                required: {
                  value: true,
                  message: 'Justify question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError
              name={JUSTIFY_VISUALISATION_GROUP_B}
              className="rw-field-error"
            />
          </Box>
        </Stack>
        <SubmitButtons onPrevious={onPrevious} />
      </Flex>
    </Form>
  )
}
