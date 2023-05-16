import type { ImageSurveyQuery } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, MetaTags } from '@redwoodjs/web'
import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'

export const QUERY = gql`
  query ImageSurveyQuery($id: Int!) {
    imageSurvey: privateRank(id: $id) {
      id
      userId
      rank
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
      return (
        <ul>
          <MetaTags title="Survey" description="Survey" />
          {console.log("test", imageSurvey)}
          
          <li key={imageSurvey.id}>{JSON.stringify(imageSurvey)}</li>
          <LikertScaleQuestionField name='test' n={5} direction='row'/>
        </ul>

      )

}
