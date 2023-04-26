import { Controller, RegisterOptions } from '@redwoodjs/forms'
import OpenEndedQuestion, {
  OpenEndedQuestionProps,
} from '../OpenEndedQuestion/OpenEndedQuestion'

interface OpenEndedQuestionFieldProps
  extends Omit<OpenEndedQuestionProps, 'onChange' | 'value'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const OpenEndedQuestionField = (props: OpenEndedQuestionFieldProps) => {
  const { validation, errorClassName, name, ...propsRest } = props

  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onChange, value } }) => (
        <OpenEndedQuestion {...propsRest} onChange={onChange} value={value} />
      )}
    />
  )
}

export default OpenEndedQuestionField
