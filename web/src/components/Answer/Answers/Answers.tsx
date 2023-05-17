import type { DeleteAnswerMutationVariables, FindAnswers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Answer/AnswersCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ANSWER_MUTATION = gql`
  mutation DeleteAnswerMutation($id: Int!) {
    deleteAnswer(id: $id) {
      id
    }
  }
`

const AnswersList = ({ answers }: FindAnswers) => {
  const [deleteAnswer] = useMutation(DELETE_ANSWER_MUTATION, {
    onCompleted: () => {
      toast.success('Answer deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAnswerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete answer ' + id + '?')) {
      deleteAnswer({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Image id</th>
            <th>Answer</th>
            <th>Created at</th>
            <th>Submitted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer) => (
            <tr key={answer.id}>
              <td>{truncate(answer.id)}</td>
              <td>{truncate(answer.userId)}</td>
              <td>{truncate(answer.imageId)}</td>
              <td>{truncate(answer.answer)}</td>
              <td>{timeTag(answer.createdAt)}</td>
              <td>{timeTag(answer.submittedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.answer({ id: answer.id })}
                    title={'Show answer ' + answer.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAnswer({ id: answer.id })}
                    title={'Edit answer ' + answer.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete answer ' + answer.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(answer.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnswersList
