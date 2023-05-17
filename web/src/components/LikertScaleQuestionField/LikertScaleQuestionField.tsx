import { Controller, RegisterOptions } from '@redwoodjs/forms'

import LikertScaleQuestion from '../LikertScaleQuestion/LikertScaleQuestion'
import type { LikertScaleQuestionProps } from '../LikertScaleQuestion/LikertScaleQuestion'

interface LikertScaleQuestionFieldProps
  extends Omit<LikertScaleQuestionProps, 'onChange'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const LikertScaleQuestionField = (props: LikertScaleQuestionFieldProps) => {
  const { validation, name, value, ...propsRest } = props

  return (
    <Controller
      name={name}
      rules={validation}
      defaultValue={value}
      render={({ field: { onChange, value } }) => (
        <LikertScaleQuestion
          {...propsRest}
          onChange={(e) => {
            onChange({ target: { value: e } })
          }}
          value={value}
        />
      )}
    />
  )
}

export default LikertScaleQuestionField
