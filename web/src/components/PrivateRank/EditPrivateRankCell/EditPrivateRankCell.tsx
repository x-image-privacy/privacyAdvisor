import type { EditPrivateRankById, UpdatePrivateRankInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PrivateRankForm from 'src/components/PrivateRank/PrivateRankForm'

export const QUERY = gql`
  query EditPrivateRankById($id: Int!) {
    privateRank: privateRank(id: $id) {
      id
      userId
      rank
    }
  }
`
const UPDATE_PRIVATE_RANK_MUTATION = gql`
  mutation UpdatePrivateRankMutation(
    $id: Int!
    $input: UpdatePrivateRankInput!
  ) {
    updatePrivateRank(id: $id, input: $input) {
      id
      userId
      rank
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  privateRank,
}: CellSuccessProps<EditPrivateRankById>) => {
  const [updatePrivateRank, { loading, error }] = useMutation(
    UPDATE_PRIVATE_RANK_MUTATION,
    {
      onCompleted: () => {
        toast.success('PrivateRank updated')
        navigate(routes.privateRanks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePrivateRankInput,
    id: EditPrivateRankById['privateRank']['id']
  ) => {
    updatePrivateRank({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PrivateRank {privateRank?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrivateRankForm
          privateRank={privateRank}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
