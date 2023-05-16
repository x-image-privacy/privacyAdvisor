import { useMutation } from '@redwoodjs/web'
import type { ImageSurveyQuery } from 'types/graphql'
import { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import { Stack, StackDivider } from '@chakra-ui/react'
import { IS_PRIVATE_QUESTION_GROUP_A, PRIVATE_ELEMENTS_QUESTION_GROUP_A, PUBLIC_ELEMENTS_QUESTION_GROUP_A } from 'web/config/constants'
import { Form, Submit, SubmitHandler } from '@redwoodjs/forms'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

export const QUERY = gql`
  query ImageSurveyQuery($id: Int!) {
    imageSurvey: plainImageSurvey(id: $id) {
      id
      userId
      privateRank
      publicElem
      privateElem
    }
  }
`

import {
  CreatePlainImageSurveyMutation, CreatePlainImageSurveyMutationVariables, 
} from 'types/graphql'

const CREATE_PLAIN_IMAGE_SURVEY = gql`
  mutation CreatePlainImageSurveyMutation($input: CreatePlainImageSurveyInput!) {
    createPlainImageSurvey(input: $input) {
      id
      userId
      privateRank
      publicElem
      privateElem
    }
  }`

interface PlainImageSurveyValues {
  IS_PRIVATE_QUESTION_GROUP_A: number
  PUBLIC_ELEMENTS_QUESTION_GROUP_A: string
  PRIVATE_ELEMENTS_QUESTION_GROUP_A: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  imageSurvey,
}: CellSuccessProps<ImageSurveyQuery>) => {

  const [create] = useMutation<
  CreatePlainImageSurveyMutation,
  CreatePlainImageSurveyMutationVariables
  >(CREATE_PLAIN_IMAGE_SURVEY)
  
  const onSubmit: SubmitHandler<PlainImageSurveyValues> = (data) => {
    create(
      { variables: {
        input: {
          userId: 1, // TODO: get user id
          privateRank: data.IS_PRIVATE_QUESTION_GROUP_A,
          privateElem: data.PRIVATE_ELEMENTS_QUESTION_GROUP_A,
          publicElem: data.PUBLIC_ELEMENTS_QUESTION_GROUP_A,
        }
        }
      }
    )
  }
      return (
        <Form onSubmit={onSubmit} config={{mode: 'onBlur'}}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="start"
            divider={<StackDivider borderColor="grayIcon" />}
          >
            <LikertScaleQuestionField
              name={IS_PRIVATE_QUESTION_GROUP_A}
              n={5}
              question="Is this image private?"
              leftHand="No"
              rightHand="Yes"
              direction='row'
              validation={{required: true}}
            />
            <OpenEndedQuestionField
              question="Which elements do you consider as public in this image?"
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_A}
              placeholder="Answer here..."
              validation={{required: true}}

            />
            <OpenEndedQuestionField
              question="Which elements would you feel uncomfortable disclosing in this image?"
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
              placeholder="Answer here..."
              validation={{required: true}}

            />
            <Submit className="button" color="grayIcon">
              Next
            </Submit>
          </Stack>
          </Form>


      )

}
