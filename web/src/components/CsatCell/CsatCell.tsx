import type { FindCsatSurveyByUserId } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import { CSAT_OPEN_QUESTION, CSAT_RANK_QUESTION} from 'web/config/constants'
import { Form, Submit, SubmitHandler } from '@redwoodjs/forms'
import { Stack } from '@chakra-ui/react'
import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

type CsatProps = {
  userId: number
  onFinished: () => void
}

export const QUERY = gql`
  query FindCsatSurveyByUserId($userId: Int!) {
    csatSurvey: customerSatisfactionSurveyByUser(userId: $userId) {
      id
      user {
        id
      }
      csat {
        id
        rank
        justification
      }
    }
  }
`
const CREATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation CreateCustomerSatisfactionSurvey($input: CreateCustomerSatisfactionSurveyInput!) {
    createCustomerSatisfactionSurvey(input: $input) {
      id
      csat
    }
  }`

const UPDATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation UpdateCustomerSatisfactionSurvey(
    $id: Int!
    $input: UpdateCustomerSatisfactionSurveyInput!
  ) {
    updateCustomerSatisfactionSurvey(id: $id, input: $input) {
      id
      userId
      csat
    }
  }
`

const CREATE_CUSTOMER_SATISFACTION_SCORE = gql`
  mutation CreateCustomerSatisfactionScore($input: CreateCustomerSatisfactionScoreInput!) {
    createCustomerSatisfactionScore(input: $input) {
      id
      rank
      justification
    }
  }
`

const UPDATE_CUSTOMER_SATISFACTION_SCORE = gql`
  mutation UpdateCustomerSatisfactionScore(
    $id: Int!
    $input: UpdateCustomerSatisfactionScoreInput!
  ) {
    updateCustomerSatisfactionScore(id: $id, input: $input) {
      id 
      rank 
      justification
    }
  }
`

interface CsatValues {
  CSAT_RANK_QUESTION: string
  CSAT_OPEN_QUESTION: string

}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: CsatProps) => <CsatSurveyComponent {...props}/>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindCsatSurveyByUserId> & CsatProps ) => <CsatSurveyComponent {...props}/>

const CsatSurveyComponent = ({ csatSurvey, userId, onFinished,}: FindCsatSurveyByUserId & CsatProps) => {
  const [createCustomerSurvey] = useMutation(CREATE_CUSTOMER_SATISFACTION_SURVEY)
  const [updateCustomerSurvey] = useMutation(UPDATE_CUSTOMER_SATISFACTION_SURVEY)


  const [createCsat] = useMutation(CREATE_CUSTOMER_SATISFACTION_SCORE)
  const [updateCsat] = useMutation(UPDATE_CUSTOMER_SATISFACTION_SCORE)

  const onSubmit: SubmitHandler<CsatValues> = (data) => {
    const csatRank = parseInt(data[CSAT_RANK_QUESTION])

    if (csatSurvey && csatSurvey.id) {
      if(csatSurvey.csat.id) {
        updateCsat({
          variables: {
            id: csatSurvey.csat.id,
            input: {
              rank: csatRank,
              justification: data[CSAT_OPEN_QUESTION],
            },
          }
        })
      } else {
        createCsat({
          variables: {
            input: {
              rank: csatRank,
              justification: data[CSAT_OPEN_QUESTION],
            }
          }
        })
      }

      updateCustomerSurvey({
        variables: {
          id: csatSurvey.id,
          input: {
            csat: csatSurvey.csat.id
          }
        }
      })
    } else {
      createCsat({
        variables: {
          input: {
            rank: csatRank,
            justification: data[CSAT_OPEN_QUESTION],
          }
        }
      })

      createCustomerSurvey({
        variables: {
          input: {
            userId,
            csat: csatSurvey.csat.id,
          }
        }
      })
    }
    onFinished()
  }

  return(
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Stack direction="column" gap={8} alignItems="start">
        <LikertScaleQuestionField
          name={CSAT_RANK_QUESTION}
          n={5}
          question="How satisfied are you with the interface?"
          text={[
            'Very satisfied',
            'Satisfied',
            'Neutral',
            'Dissatisfied',
            'Very dissatisfied',
          ]}
          direction="column" 
          value={csatSurvey?.csat.rank.toString() || ''} 
          validation={{ required: true }}     
        />
        <OpenEndedQuestionField
          question="What is the biggest value you get from using this interface?"
          name={CSAT_OPEN_QUESTION}
          placeholder="Justify here..." 
          value={csatSurvey?.csat.justification || ''}
          validation={{ required: true }}
        />
      <Submit className="button" color="grayIcon">
        Next
      </Submit>
    </Stack>
  </Form>
  )


}