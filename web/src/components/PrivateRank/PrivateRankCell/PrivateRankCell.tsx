import type { FindPrivateRankById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PrivateRank from 'src/components/PrivateRank/PrivateRank'

export const QUERY = gql`
  query FindPrivateRankById($id: Int!) {
    privateRank: privateRank(id: $id) {
      id
      userId
      rank
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PrivateRank not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  privateRank,
}: CellSuccessProps<FindPrivateRankById>) => {
  return <PrivateRank privateRank={privateRank} />
}
