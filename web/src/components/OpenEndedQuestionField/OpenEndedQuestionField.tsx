import { Controller, RegisterOptions } from '@redwoodjs/forms'

import OpenEndedQuestion, {
  OpenEndedQuestionProps,
} from '../OpenEndedQuestion/OpenEndedQuestion'

interface OpenEndedQuestionFieldProps
  extends Omit<OpenEndedQuestionProps, 'onChange'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const OpenEndedQuestionField = (props: OpenEndedQuestionFieldProps) => {
  const { validation, name, value, ...propsRest } = props

  return (
    <Controller
      name={name}
      rules={validation}
      defaultValue={value}
      render={({ field: { onChange, value } }) => (
        <OpenEndedQuestion {...propsRest} onChange={onChange} value={value} />
      )}
    />
  )
}

export default OpenEndedQuestionField
