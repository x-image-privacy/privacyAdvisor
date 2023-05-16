import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeletePlainImageSurveyMutationVariables,
  FindPlainImageSurveyById,
} from 'types/graphql'

const DELETE_PLAIN_IMAGE_SURVEY_MUTATION = gql`
  mutation DeletePlainImageSurveyMutation($id: Int!) {
    deletePlainImageSurvey(id: $id) {
      id
    }
  }
`

interface Props {
  plainImageSurvey: NonNullable<FindPlainImageSurveyById['plainImageSurvey']>
}

const PlainImageSurvey = ({ plainImageSurvey }: Props) => {
  const [deletePlainImageSurvey] = useMutation(
    DELETE_PLAIN_IMAGE_SURVEY_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlainImageSurvey deleted')
        navigate(routes.plainImageSurveys())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeletePlainImageSurveyMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete plainImageSurvey ' + id + '?')
    ) {
      deletePlainImageSurvey({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlainImageSurvey {plainImageSurvey.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{plainImageSurvey.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{plainImageSurvey.userId}</td>
            </tr>
            <tr>
              <th>Private rank</th>
              <td>{plainImageSurvey.privateRank}</td>
            </tr>
            <tr>
              <th>Public elem</th>
              <td>{plainImageSurvey.publicElem}</td>
            </tr>
            <tr>
              <th>Private elem</th>
              <td>{plainImageSurvey.privateElem}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlainImageSurvey({ id: plainImageSurvey.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(plainImageSurvey.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PlainImageSurvey
