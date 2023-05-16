import type { FindPlainImageSurveyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlainImageSurvey from 'src/components/PlainImageSurvey/PlainImageSurvey'

export const QUERY = gql`
  query FindPlainImageSurveyById($id: Int!) {
    plainImageSurvey: plainImageSurvey(id: $id) {
      id
      userId
      privateRank
      publicElem
      privateElem
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PlainImageSurvey not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  plainImageSurvey,
}: CellSuccessProps<FindPlainImageSurveyById>) => {
  return <PlainImageSurvey plainImageSurvey={plainImageSurvey} />
}
