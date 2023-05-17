import type {
  DeletePlainImageSurveyMutationVariables,
  FindPlainImageSurveys,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PlainImageSurvey/PlainImageSurveysCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PLAIN_IMAGE_SURVEY_MUTATION = gql`
  mutation DeletePlainImageSurveyMutation($id: Int!) {
    deletePlainImageSurvey(id: $id) {
      id
    }
  }
`

const PlainImageSurveysList = ({
  plainImageSurveys,
}: FindPlainImageSurveys) => {
  const [deletePlainImageSurvey] = useMutation(
    DELETE_PLAIN_IMAGE_SURVEY_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlainImageSurvey deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Private rank</th>
            <th>Public elem</th>
            <th>Private elem</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {plainImageSurveys.map((plainImageSurvey) => (
            <tr key={plainImageSurvey.id}>
              <td>{truncate(plainImageSurvey.id)}</td>
              <td>{truncate(plainImageSurvey.userId)}</td>
              <td>{truncate(plainImageSurvey.privateRank)}</td>
              <td>{truncate(plainImageSurvey.publicElem)}</td>
              <td>{truncate(plainImageSurvey.privateElem)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.plainImageSurvey({ id: plainImageSurvey.id })}
                    title={
                      'Show plainImageSurvey ' + plainImageSurvey.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlainImageSurvey({
                      id: plainImageSurvey.id,
                    })}
                    title={'Edit plainImageSurvey ' + plainImageSurvey.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete plainImageSurvey ' + plainImageSurvey.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(plainImageSurvey.id)}
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

export default PlainImageSurveysList
