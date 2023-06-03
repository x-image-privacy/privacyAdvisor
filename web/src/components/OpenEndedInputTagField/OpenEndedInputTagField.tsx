import { Controller, RegisterOptions } from 'react-hook-form'

import OpenEndedInputTag, {
  OpenEndedInputTagProps,
} from '../OpenEndedInputTag/OpenEndedInputTag'

interface OpenEndedInputTagFieldProps
  extends Omit<OpenEndedInputTagProps, 'onChange'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const OpenEndedInputTagField = (props: OpenEndedInputTagFieldProps) => {
  const { validation, name, value, ...propsRest } = props

  return (
    <Controller
      name={name}
      rules={validation}
      defaultValue={value}
      render={({ field: { onChange, value } }) => (
        <OpenEndedInputTag {...propsRest} onChange={onChange} value={value} />
      )}
    />
  )
}

export default OpenEndedInputTagField
