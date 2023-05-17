import { ChangeEventHandler } from 'react'

import { Input } from '@chakra-ui/react'

import { Controller, RegisterOptions } from '@redwoodjs/forms'

export type JustifyQuestionProps = {
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

interface JustifyQuestionFieldProps
  extends Omit<JustifyQuestionProps, 'onChange' | 'value'> {
  validation?: RegisterOptions
  errorClassName?: string
  name: string
}

const JustifyQuestionField = (props: JustifyQuestionFieldProps) => {
  const { validation, name, ...propsRest } = props
  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onChange, value } }) => (
        <Input
          {...propsRest}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      )}
    />
  )
}

export default JustifyQuestionField
