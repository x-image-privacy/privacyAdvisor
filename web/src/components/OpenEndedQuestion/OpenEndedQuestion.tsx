import { Stack, Text, Input } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

export type OpenEndedQuestionProps = {
  question: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder: string
  value: string
}

const OpenEndedQuestion = ({
  question,
  placeholder,
  onChange,
  value,
}: OpenEndedQuestionProps) => {
  return (
    <Stack alignItems="center">
      <Text data-testid="question">{question}</Text>
      <Input
        placeholder={placeholder}
        size="lg"
        onChange={onChange}
        value={value}
        data-testid="input"
      />
    </Stack>
  )
}

export default OpenEndedQuestion
