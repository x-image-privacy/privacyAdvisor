import type { FindPlainImageSurveys } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlainImageSurveys from 'src/components/PlainImageSurvey/PlainImageSurveys'

export const QUERY = gql`
  query FindPlainImageSurveys {
    plainImageSurveys {
      id
      userId
      privateRank
      publicElem
      privateElem
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No plainImageSurveys yet. '}
      <Link to={routes.newPlainImageSurvey()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  plainImageSurveys,
}: CellSuccessProps<FindPlainImageSurveys>) => {
  return <PlainImageSurveys plainImageSurveys={plainImageSurveys} />
}
