import type {
  EditPlainImageSurveyById,
  UpdatePlainImageSurveyInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlainImageSurveyForm from 'src/components/PlainImageSurvey/PlainImageSurveyForm'

export const QUERY = gql`
  query EditPlainImageSurveyById($id: Int!) {
    plainImageSurvey: plainImageSurvey(id: $id) {
      id
      userId
      privateRank
      publicElem
      privateElem
    }
  }
`
const UPDATE_PLAIN_IMAGE_SURVEY_MUTATION = gql`
  mutation UpdatePlainImageSurveyMutation(
    $id: Int!
    $input: UpdatePlainImageSurveyInput!
  ) {
    updatePlainImageSurvey(id: $id, input: $input) {
      id
      userId
      privateRank
      publicElem
      privateElem
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  plainImageSurvey,
}: CellSuccessProps<EditPlainImageSurveyById>) => {
  const [updatePlainImageSurvey, { loading, error }] = useMutation(
    UPDATE_PLAIN_IMAGE_SURVEY_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlainImageSurvey updated')
        navigate(routes.plainImageSurveys())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePlainImageSurveyInput,
    id: EditPlainImageSurveyById['plainImageSurvey']['id']
  ) => {
    updatePlainImageSurvey({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlainImageSurvey {plainImageSurvey?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlainImageSurveyForm
          plainImageSurvey={plainImageSurvey}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
