import type { EditAnswerById, UpdateAnswerInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormAnswer = NonNullable<EditAnswerById['answer']>

interface AnswerFormProps {
  answer?: EditAnswerById['answer']
  onSave: (data: UpdateAnswerInput, id?: FormAnswer['id']) => void
  error: RWGqlError
  loading: boolean
}

const AnswerForm = (props: AnswerFormProps) => {
  const onSubmit = (data: FormAnswer) => {
    props.onSave(data, props?.answer?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAnswer> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.answer?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="imageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image id
        </Label>

        <NumberField
          name="imageId"
          defaultValue={props.answer?.imageId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageId" className="rw-field-error" />

        <Label
          name="answer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer
        </Label>

        <TextField
          name="answer"
          defaultValue={props.answer?.answer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="answer" className="rw-field-error" />

        <Label
          name="submittedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Submitted at
        </Label>

        <DatetimeLocalField
          name="submittedAt"
          defaultValue={formatDatetime(props.answer?.submittedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="submittedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AnswerForm
