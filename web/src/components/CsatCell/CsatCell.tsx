import type { FindCsatQuery, FindCsatQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCsatSurveyByUserId($userId: Int!) {
    csat: customerSatisfactionSurveyByUserId(userId: $userId) {
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
    createCustomerSatisfactionSurvey(input: $input!) {
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
    createCustomerSatisfactionScore(input: $input!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCsatQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  csat,
}: CellSuccessProps<FindCsatQuery, FindCsatQueryVariables>) => {
  return <div>{JSON.stringify(csat)}</div>
}

const CsatSurveyComponent = ({

})