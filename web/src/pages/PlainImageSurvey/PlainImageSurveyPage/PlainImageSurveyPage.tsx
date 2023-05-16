import PlainImageSurveyCell from 'src/components/PlainImageSurvey/PlainImageSurveyCell'

type PlainImageSurveyPageProps = {
  id: number
}

const PlainImageSurveyPage = ({ id }: PlainImageSurveyPageProps) => {
  return <PlainImageSurveyCell id={id} />
}

export default PlainImageSurveyPage
