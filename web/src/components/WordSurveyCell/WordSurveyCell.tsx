import { Box, Flex, Stack, StackDivider } from '@chakra-ui/react'
import type {
  CreateWordSurveyMutation,
  CreateWordSurveyMutationVariables,
  FindImageSurveyByUserAndImageIdWord,
  UpdateWordSurveyMutation,
  UpdateWordSurveyMutationVariables,
} from 'types/graphql'
import {
  IS_PRIVATE_QUESTION_GROUP_B,
  PRIVATE_ELEMENTS_QUESTION_GROUP_B,
  PUBLIC_ELEMENTS_QUESTION_GROUP_B,
  GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B,
  JUSTIFY_VISUALISATION_GROUP_B,
} from 'web/config/constants'

import { FieldError, Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

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
  props: CellSuccessProps<FindImageSurveyByUserAndImageIdWord> &
    WordImageSurveyProps
) => <WordImageSurveyComponent {...props} />

const WordImageSurveyComponent = ({
  imageSurvey,
  userId,
  imageId,
  onPrevious,
  onFinished,
}: FindImageSurveyByUserAndImageIdWord & WordImageSurveyProps) => {
  const [create, { loading: loadingCreate, error: errorCreate }] = useMutation<
    CreateWordSurveyMutation,
    CreateWordSurveyMutationVariables
  >(CREATE_IMAGE_SURVEY, {
    onError: () => {
      toast.error('Word survey create error')
    },
  })
  const [update, { loading: loadingUpdate, error: errorUpdate }] = useMutation<
    UpdateWordSurveyMutation,
    UpdateWordSurveyMutationVariables
  >(UPDATE_IMAGE_SURVEY, {
    onError: () => {
      toast.error('Word survey update error')
    },
  })

  const onSubmit: SubmitHandler<WordImageSurveyValues> = async (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_B])
    const satisfactionRank = parseInt(
      data[GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B]
    )
    const publicElement = data[PUBLIC_ELEMENTS_QUESTION_GROUP_B].tags.join(' ')

    const privateElement =
      data[PRIVATE_ELEMENTS_QUESTION_GROUP_B].tags.join(' ')

    if (imageSurvey && imageSurvey.id && imageSurvey.hasInterface == true) {
      await update({
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
      await create({
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

    if (!errorCreate && !errorUpdate) {
      onFinished()
    }
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
        <SubmitButtons
          onPrevious={onPrevious}
          isLoading={loadingCreate || loadingUpdate}
          name="Next"
        />
      </Flex>
    </Form>
  )
}
