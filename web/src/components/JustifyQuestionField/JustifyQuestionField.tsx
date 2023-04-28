import { Controller, RegisterOptions } from '@redwoodjs/forms'
import JustifyQuestion, {
  JustifyQuestionProps,
} from '../JustifyQuestion/JustifyQuestion'

interface JustifyQuestionFieldProps
  extends Omit<JustifyQuestionProps, 'onChange' | 'value'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}
const JustifyQuestionField = (props: JustifyQuestionFieldProps) => {
  const { validation, errorClassName, name, ...propsRest } = props
  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onChange, value } }) => (
        <JustifyQuestion {...propsRest} onChange={onChange} value={value} />
      )}
    />
  )
}

export default JustifyQuestionField
