import type { FindAnswerById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Answer from 'src/components/Answer/Answer'

export const QUERY = gql`
  query FindAnswerById($id: Int!) {
    answer: answer(id: $id) {
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

export const Empty = () => <div>Answer not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ answer }: CellSuccessProps<FindAnswerById>) => {
  return <Answer answer={answer} />
}
