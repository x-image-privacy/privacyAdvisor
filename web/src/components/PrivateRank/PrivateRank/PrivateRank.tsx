import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeletePrivateRankMutationVariables,
  FindPrivateRankById,
} from 'types/graphql'

const DELETE_PRIVATE_RANK_MUTATION = gql`
  mutation DeletePrivateRankMutation($id: Int!) {
    deletePrivateRank(id: $id) {
      id
    }
  }
`

interface Props {
  privateRank: NonNullable<FindPrivateRankById['privateRank']>
}

const PrivateRank = ({ privateRank }: Props) => {
  const [deletePrivateRank] = useMutation(DELETE_PRIVATE_RANK_MUTATION, {
    onCompleted: () => {
      toast.success('PrivateRank deleted')
      navigate(routes.privateRanks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePrivateRankMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete privateRank ' + id + '?')) {
      deletePrivateRank({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PrivateRank {privateRank.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{privateRank.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{privateRank.userId}</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>{privateRank.rank}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPrivateRank({ id: privateRank.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(privateRank.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PrivateRank
