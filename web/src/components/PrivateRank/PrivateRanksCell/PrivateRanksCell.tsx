import type { FindPrivateRanks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PrivateRanks from 'src/components/PrivateRank/PrivateRanks'

export const QUERY = gql`
  query FindPrivateRanks {
    privateRanks {
      id
      userId
      rank
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No privateRanks yet. '}
      <Link to={routes.newPrivateRank()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  privateRanks,
}: CellSuccessProps<FindPrivateRanks>) => {
  return <PrivateRanks privateRanks={privateRanks} />
}
