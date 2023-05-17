import AnswerCell from 'src/components/Answer/AnswerCell'

type AnswerPageProps = {
  id: number
}

const AnswerPage = ({ id }: AnswerPageProps) => {
  return <AnswerCell id={id} />
}

export default AnswerPage
