import type { CreatePlainImageSurveyInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlainImageSurveyForm from 'src/components/PlainImageSurvey/PlainImageSurveyForm'

const CREATE_PLAIN_IMAGE_SURVEY_MUTATION = gql`
  mutation createPlainImageSurvey($input: CreatePlainImageSurveyInput!) {
    createPlainImageSurvey(input: $input) {
      id
    }
  }
`

const NewPlainImageSurvey = () => {
  const [createPlainImageSurvey, { loading, error }] = useMutation(
    CREATE_PLAIN_IMAGE_SURVEY_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlainImageSurvey created')
        navigate(routes.plainImageSurveys())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePlainImageSurveyInput) => {
    createPlainImageSurvey({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New PlainImageSurvey
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlainImageSurveyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlainImageSurvey
