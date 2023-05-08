import { Controller, RegisterOptions } from '@redwoodjs/forms'
import UeqQuestion, { UEQQuestionProps } from '../UEQQuestion/UEQQuestion'

interface UEQQuestionFieldProps
  extends Omit<UEQQuestionProps, 'onChange' | 'value'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const UeqQuestionField = (props: UEQQuestionFieldProps) => {
  const { validation, errorClassName, name, ...propsRest } = props

  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onChange, value } }) => (
        <UeqQuestion {...propsRest} onChange={onChange} value={value} />
      )}
    />
  )
}

export default UeqQuestionField
