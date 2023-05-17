import type { EditAnswerById, UpdateAnswerInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AnswerForm from 'src/components/Answer/AnswerForm'

export const QUERY = gql`
  query EditAnswerById($id: Int!) {
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
const UPDATE_ANSWER_MUTATION = gql`
  mutation UpdateAnswerMutation($id: Int!, $input: UpdateAnswerInput!) {
    updateAnswer(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ answer }: CellSuccessProps<EditAnswerById>) => {
  const [updateAnswer, { loading, error }] = useMutation(
    UPDATE_ANSWER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Answer updated')
        navigate(routes.answers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAnswerInput,
    id: EditAnswerById['answer']['id']
  ) => {
    updateAnswer({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Answer {answer?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AnswerForm
          answer={answer}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
