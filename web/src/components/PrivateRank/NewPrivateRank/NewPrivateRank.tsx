import type { CreatePrivateRankInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PrivateRankForm from 'src/components/PrivateRank/PrivateRankForm'

const CREATE_PRIVATE_RANK_MUTATION = gql`
  mutation CreatePrivateRankMutation($input: CreatePrivateRankInput!) {
    createPrivateRank(input: $input) {
      id
    }
  }
`

const NewPrivateRank = () => {
  const [createPrivateRank, { loading, error }] = useMutation(
    CREATE_PRIVATE_RANK_MUTATION,
    {
      onCompleted: () => {
        toast.success('PrivateRank created')
        navigate(routes.privateRanks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePrivateRankInput) => {
    createPrivateRank({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PrivateRank</h2>
      </header>
      <div className="rw-segment-main">
        <PrivateRankForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPrivateRank
