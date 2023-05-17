import type { EditPrivateRankById, UpdatePrivateRankInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPrivateRank = NonNullable<EditPrivateRankById['privateRank']>

interface PrivateRankFormProps {
  privateRank?: EditPrivateRankById['privateRank']
  onSave: (data: UpdatePrivateRankInput, id?: FormPrivateRank['id']) => void
  error: RWGqlError
  loading: boolean
}

const PrivateRankForm = (props: PrivateRankFormProps) => {
  const onSubmit = (data: FormPrivateRank) => {
    props.onSave(data, props?.privateRank?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPrivateRank> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.privateRank?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="rank"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rank
        </Label>

        <NumberField
          name="rank"
          defaultValue={props.privateRank?.rank}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="rank" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PrivateRankForm
