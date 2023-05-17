import EditAnswerCell from 'src/components/Answer/EditAnswerCell'

type AnswerPageProps = {
  id: number
}

const EditAnswerPage = ({ id }: AnswerPageProps) => {
  return <EditAnswerCell id={id} />
}

export default EditAnswerPage
