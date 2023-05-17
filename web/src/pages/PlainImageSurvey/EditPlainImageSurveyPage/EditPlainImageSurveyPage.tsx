import EditPlainImageSurveyCell from 'src/components/PlainImageSurvey/EditPlainImageSurveyCell'

type PlainImageSurveyPageProps = {
  id: number
}

const EditPlainImageSurveyPage = ({ id }: PlainImageSurveyPageProps) => {
  return <EditPlainImageSurveyCell id={id} />
}

export default EditPlainImageSurveyPage
