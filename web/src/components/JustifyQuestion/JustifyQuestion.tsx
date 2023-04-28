import { ChangeEventHandler } from 'react'
import { Input } from '@chakra-ui/react'

export type JustifyQuestionProps = {
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

const JustifyQuestion = ({
  placeholder,
  onChange,
  value,
}: JustifyQuestionProps) => {
  return (
    <Input
      placeholder={placeholder}
      size="lg"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      data-testid="input"
    />
  )
}

export default JustifyQuestion
