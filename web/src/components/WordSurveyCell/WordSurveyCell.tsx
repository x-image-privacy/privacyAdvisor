import { Button, Stack, StackDivider } from '@chakra-ui/react'
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

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
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
  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation(UPDATE_IMAGE_SURVEY)
  const [updateUser] = useMutation(UPDATE_USER_WORD_SURVEY_)

  const onSubmit: SubmitHandler<WordImageSurveyValues> = async (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_B])
    const satisfactionRank = parseInt(
      data[GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B]
    )

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
      <Stack
        direction="row"
        spacing={5}
        justifyContent="start"
        divider={<StackDivider borderColor="grayIcon" />}
      >
        <Button onClick={onPrevious}>Previous</Button>
        <LikertScaleQuestionField
          name={IS_PRIVATE_QUESTION_GROUP_B}
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
          direction="row"
          value={previousValues?.privateRank.toString() || ''}
          validation={{ required: true }}
        />
        <OpenEndedQuestionField
          question="Which elements do you consider as public in this image?"
          name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
          placeholder="Answer here..."
          value={previousValues?.publicElem || ''}
          validation={{ required: true }}
        />
        <OpenEndedQuestionField
          question="Which elements would you feel uncomfortable disclosing in this image?"
          name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
          placeholder="Answer here..."
          value={previousValues?.privateElem || ''}
          validation={{ required: true }}
        />
        <Stack direction="column" spacing={4} justifyContent="start">
          <LikertScaleQuestionField
            name={GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B}
            n={5}
            question="Is this visualisation efficient to help you form an opinion?"
            leftHand="No"
            rightHand="Yes"
            direction="row"
            value={previousValues?.satisfactionRank?.toString() || ''}
            validation={{ required: true }}
          />
          <OpenEndedQuestionField
            placeholder="Justify here..."
            name={JUSTIFY_VISUALISATION_GROUP_B}
            value={previousValues?.satisfactionElem || ''}
            validation={{ required: true }}
          />
        </Stack>
        <Button type="submit">Next</Button>
      </Stack>
    </Form>
  )
}
