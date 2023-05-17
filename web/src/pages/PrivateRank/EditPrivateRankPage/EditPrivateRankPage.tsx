import EditPrivateRankCell from 'src/components/PrivateRank/EditPrivateRankCell'

type PrivateRankPageProps = {
  id: number
}

const EditPrivateRankPage = ({ id }: PrivateRankPageProps) => {
  return <EditPrivateRankCell id={id} />
}

export default EditPrivateRankPage
