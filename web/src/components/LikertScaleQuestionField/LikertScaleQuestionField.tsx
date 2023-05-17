import { Controller, RegisterOptions } from '@redwoodjs/forms'

import LikertScaleQuestion from '../LikertScaleQuestion/LikertScaleQuestion'
import type { LikertScaleQuestionProps } from '../LikertScaleQuestion/LikertScaleQuestion'

interface LikertScaleQuestionFieldProps
  extends Omit<LikertScaleQuestionProps, 'onChange' | 'value'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const LikertScaleQuestionField = (props: LikertScaleQuestionFieldProps) => {
  const { validation, name, ...propsRest } = props

  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onChange, value } }) => (
        <LikertScaleQuestion {...propsRest} onChange={onChange} value={value} />
      )}
    />
  )
}

export default LikertScaleQuestionField
