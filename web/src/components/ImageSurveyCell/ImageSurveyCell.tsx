import type {
  FindImageSurveyQuery,
  FindImageSurveyQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'

export const QUERY = gql`
  query FindImageSurveyQuery($id: Int!) {
    imageSurvey: post(id: $id) {
      id
      group
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindImageSurveyQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  imageSurvey,
}: CellSuccessProps<FindImageSurveyQuery, FindImageSurveyQueryVariables>) => {
  return(<LikertScaleQuestionField name='test' direction='column' n={5}/>)
}
