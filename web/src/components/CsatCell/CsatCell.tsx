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
const CREATE_CSAT_SURVEY = gql`
  mutation CreateCsatScoreMutation($input: CreateCustomerSatisfactionScoreInput!) {
    createCustomerSatisfactionScore(input: $input!) {
      id
    }
  }`

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