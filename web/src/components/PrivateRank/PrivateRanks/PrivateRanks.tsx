import type {
  DeletePrivateRankMutationVariables,
  FindPrivateRanks,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PrivateRank/PrivateRanksCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PRIVATE_RANK_MUTATION = gql`
  mutation DeletePrivateRankMutation($id: Int!) {
    deletePrivateRank(id: $id) {
      id
    }
  }
`

const PrivateRanksList = ({ privateRanks }: FindPrivateRanks) => {
  const [deletePrivateRank] = useMutation(DELETE_PRIVATE_RANK_MUTATION, {
    onCompleted: () => {
      toast.success('PrivateRank deleted')
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

  const onDeleteClick = (id: DeletePrivateRankMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete privateRank ' + id + '?')) {
      deletePrivateRank({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Rank</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {privateRanks.map((privateRank) => (
            <tr key={privateRank.id}>
              <td>{truncate(privateRank.id)}</td>
              <td>{truncate(privateRank.userId)}</td>
              <td>{truncate(privateRank.rank)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.privateRank({ id: privateRank.id })}
                    title={'Show privateRank ' + privateRank.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPrivateRank({ id: privateRank.id })}
                    title={'Edit privateRank ' + privateRank.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete privateRank ' + privateRank.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(privateRank.id)}
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

export default PrivateRanksList
