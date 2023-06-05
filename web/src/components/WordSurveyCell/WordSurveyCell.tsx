import { SyntheticEvent, useCallback, useState } from 'react'

import {
  Button,
  ButtonGroup,
  Flex,
  Stack,
  StackDivider,
} from '@chakra-ui/react'
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

type WordImageSurveyProps = {
  imageId: number
  userId: number
  onFinished: () => void
  onPrevious: () => void
}

export const QUERY = gql`
  query FindImageSurveyByUserAndImageIdWord($userId: Int!, $imageId: Int!) {
    imageSurvey: imageSurveyByUserAndImage(userId: $userId, imageId: $imageId) {
      id
      user {
        id
      }
      image {
        id
      }
      hasInterface
      privateRank
      privateElem
      publicElem
      satisfactionRank
      satisfactionElem
    }
  }
`

export const QUERY_PREVIOUS_DATA = gql`
  query FindImageSurveyByUserImageIdAndHasInterface(
    $userId: Int!
    $imageId: Int!
  ) {
    previousValues: imageSurveyByUserImageAndHasInterface(
      userId: $userId
      imageId: $imageId
      hasInterface: true
    ) {
      id
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
  [PUBLIC_ELEMENTS_QUESTION_GROUP_B]: string
  [PRIVATE_ELEMENTS_QUESTION_GROUP_B]: string
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
  previousValues,
  userId,
  imageId,
  onPrevious,
  onFinished,
}: FindImageSurveyByUserAndImageIdWord &
  FindImageSurveyByUserImageIdAndHasInterface &
  WordImageSurveyProps) => {
  const [tagsPublic, setTagsPublic] = useState([])
  const [tagsPrivate, setTagsPrivate] = useState([])

  const handleTagsChangePublic = useCallback(
    (event: SyntheticEvent, tags: string[]) => setTagsPublic(tags as never),
    []
  )
  const handleTagsChangePrivate = useCallback(
    (event: SyntheticEvent, tags: string[]) => setTagsPrivate(tags as never),
    []
  )

  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation(UPDATE_IMAGE_SURVEY)
  const [updateUser] = useMutation(UPDATE_USER_WORD_SURVEY_)

  const onSubmit: SubmitHandler<WordImageSurveyValues> = async (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_B])
    const satisfactionRank = parseInt(
      data[GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B]
    )

    console.log(data)

    if (imageSurvey && imageSurvey.id && imageSurvey.hasInterface == true) {
      update({
        variables: {
          id: imageSurvey.id,
          input: {
            privateRank: privateRank,
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_B],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_B],
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
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_B],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_B],
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
            value={previousValues?.privateRank.toString() || ''}
            validation={{ required: 'Image privacy question is required' }}
            errorClassName="error"
          />
          <OpenEndedInputTagField
            tags={tagsPublic}
            onTagsChange={handleTagsChangePublic}
            placeholder="Answer here"
            value={previousValues?.privateElem || ''}
            question="Which elements do you consider as public in this image? (3 words)"
            name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
            validation={{ required: 'Public elements question is required' }}
            errorClassName="error"
          />
          <OpenEndedInputTagField
            tags={tagsPrivate}
            onTagsChange={handleTagsChangePrivate}
            placeholder="Answer here"
            value={previousValues?.privateElem || ''}
            question="Which elements would you feel uncomfortable disclosing in this image? (3 words)"
            name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
            validation={{ required: 'Private elements question is required' }}
            errorClassName="error"
          />

          <Stack direction="column" spacing={4} justifyContent="start">
            <LikertScaleQuestionField
              name={GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B}
              n={5}
              question="Is the word cloud helps you review your evaluation?"
              leftHand="Yes"
              rightHand="No"
              direction="row"
              value={previousValues?.satisfactionRank?.toString() || ''}
              validation={{ required: 'Word cloud question is required' }}
              errorClassName="error"
            />
            <OpenEndedQuestionField
              question="Justify your previous answer:"
              placeholder="Justify here..."
              name={JUSTIFY_VISUALISATION_GROUP_B}
              value={previousValues?.satisfactionElem || ''}
              validation={{
                required: 'Justify question is required',
              }}
              errorClassName="error"
            />
            <FieldError
              name={IS_PRIVATE_QUESTION_GROUP_B}
              className="error-message"
            />
            <FieldError
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
              className="error"
            />
            <FieldError
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
              className="error"
            />
            <FieldError
              name={GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B}
              className="error"
            />
            <FieldError
              name={JUSTIFY_VISUALISATION_GROUP_B}
              className="error"
            />
          </Stack>
        </Stack>
        <ButtonGroup spacing={4}>
          <Button onClick={onPrevious}>Previous</Button>
          <Button type="submit">Next</Button>
        </ButtonGroup>
      </Flex>
    </Form>
  )
}
