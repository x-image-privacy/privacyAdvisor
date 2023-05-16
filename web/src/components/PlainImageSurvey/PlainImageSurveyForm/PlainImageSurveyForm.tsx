import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditPlainImageSurveyById,
  UpdatePlainImageSurveyInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPlainImageSurvey = NonNullable<
  EditPlainImageSurveyById['plainImageSurvey']
>

interface PlainImageSurveyFormProps {
  plainImageSurvey?: EditPlainImageSurveyById['plainImageSurvey']
  onSave: (
    data: UpdatePlainImageSurveyInput,
    id?: FormPlainImageSurvey['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const PlainImageSurveyForm = (props: PlainImageSurveyFormProps) => {
  const onSubmit = (data: FormPlainImageSurvey) => {
    props.onSave(data, props?.plainImageSurvey?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPlainImageSurvey> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.plainImageSurvey?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="privateRank"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Private rank
        </Label>

        <NumberField
          name="privateRank"
          defaultValue={props.plainImageSurvey?.privateRank}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="privateRank" className="rw-field-error" />

        <Label
          name="publicElem"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Public elem
        </Label>

        <TextField
          name="publicElem"
          defaultValue={props.plainImageSurvey?.publicElem}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="publicElem" className="rw-field-error" />

        <Label
          name="privateElem"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Private elem
        </Label>

        <TextField
          name="privateElem"
          defaultValue={props.plainImageSurvey?.privateElem}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="privateElem" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlainImageSurveyForm
