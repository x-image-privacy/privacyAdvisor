import type { FindAnswers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Answers from 'src/components/Answer/Answers'

export const QUERY = gql`
  query FindAnswers {
    answers {
      id
      userId
      imageId
      answer
      createdAt
      submittedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No answers yet. '}
      <Link to={routes.newAnswer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ answers }: CellSuccessProps<FindAnswers>) => {
  return <Answers answers={answers} />
}
