import { Button, Stack, StackDivider } from '@chakra-ui/react'
import type { FindImageSurveyByUserAndImageIdWord} from 'types/graphql'
import {
  IS_PRIVATE_QUESTION_GROUP_B,
  PRIVATE_ELEMENTS_QUESTION_GROUP_B,
  PUBLIC_ELEMENTS_QUESTION_GROUP_B,
  GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B,
  JUSTIFY_VISUALISATION_GROUP_B
} from 'web/config/constants'

import { Form, Submit, SubmitHandler } from '@redwoodjs/forms'
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
        group
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
  [PUBLIC_ELEMENTS_QUESTION_GROUP_B]: string
  [PRIVATE_ELEMENTS_QUESTION_GROUP_B]: string
  [GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B]: string
  [JUSTIFY_VISUALISATION_GROUP_B]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: WordImageSurveyProps) => <WordImageSurveyComponent {...props}/>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindImageSurveyByUserAndImageIdWord> & WordImageSurveyProps
  ) => <WordImageSurveyComponent {...props}/>
  
const WordImageSurveyComponent = ({
  imageSurvey, 
  userId,
  imageId, 
  onPrevious,
  onFinished,
}: FindImageSurveyByUserAndImageIdWord & WordImageSurveyProps) => {
  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation(UPDATE_IMAGE_SURVEY)

  const onSubmit: SubmitHandler<WordImageSurveyValues> = (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_B])
    const satisfactionRank = parseInt(data[GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B])

    if (imageSurvey && imageSurvey.id && imageSurvey.hasInterface == true) {
      update({
        variables: {
          id: imageSurvey.id,
          input: {
            privateRank: privateRank,
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_B],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_B],
            satisfactionRank,
            satisfactionElem: data[JUSTIFY_VISUALISATION_GROUP_B]
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
        {/* // todo: overwrite the  */}
        <Button onClick={onPrevious}>Previous</Button>
        <LikertScaleQuestionField
          name={IS_PRIVATE_QUESTION_GROUP_B}
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
          direction="row" 
          value=''
          validation={{ required: true }}
        />
        <OpenEndedQuestionField
          question="Which elements do you consider as public in this image?"
          name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
          placeholder="Answer here..." 
          value=''
          validation={{ required: true }}
        />
        <OpenEndedQuestionField
          question="Which elements would you feel uncomfortable disclosing in this image?"
          name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
          placeholder="Answer here..." 
          value=''
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
            value=''            
            validation={{ required: true }}  
          />
          <OpenEndedQuestionField
            placeholder="Justify here..."
            name={JUSTIFY_VISUALISATION_GROUP_B} 
            value=''
            validation={{ required: true }}  
          />
        </Stack>
        <Submit className="button" color="grayIcon">
          Next
        </Submit>
      </Stack>
    </Form>
)}
