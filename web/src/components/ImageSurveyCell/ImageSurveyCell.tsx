import type {ImageSurveyQuery} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'

export const QUERY = gql`
  query ImageSurveyQuery($id: Int!) {
    imageSurvey: image(id: $id) {
      id
      imageLocation
      dataLocation
      answer
    }
  }
`

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
  return (<LikertScaleQuestionField name='test' direction='row' n={5} />)
}
