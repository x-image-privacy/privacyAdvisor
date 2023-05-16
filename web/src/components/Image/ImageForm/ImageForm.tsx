import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditImageById, UpdateImageInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormImage = NonNullable<EditImageById['image']>

interface ImageFormProps {
  image?: EditImageById['image']
  onSave: (data: UpdateImageInput, id?: FormImage['id']) => void
  error: RWGqlError
  loading: boolean
}

const ImageForm = (props: ImageFormProps) => {
  const onSubmit = (data: FormImage) => {
    props.onSave(data, props?.image?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormImage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="imageLocation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image location
        </Label>

        <TextField
          name="imageLocation"
          defaultValue={props.image?.imageLocation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageLocation" className="rw-field-error" />

        <Label
          name="dataLocation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Data location
        </Label>

        <TextField
          name="dataLocation"
          defaultValue={props.image?.dataLocation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dataLocation" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImageForm
