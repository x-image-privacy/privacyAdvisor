import PrivateRankCell from 'src/components/PrivateRank/PrivateRankCell'

type PrivateRankPageProps = {
  id: number
}

const PrivateRankPage = ({ id }: PrivateRankPageProps) => {
  return <PrivateRankCell id={id} />
}

export default PrivateRankPage
