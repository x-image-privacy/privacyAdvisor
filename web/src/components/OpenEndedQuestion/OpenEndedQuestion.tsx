import { Stack, Text, Input, Square } from '@chakra-ui/react'
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
      <Stack direction="row">
        <Square size="20px" bg="gainsboro" data-testid="square" />
        <Text data-testid="question">{question}</Text>
      </Stack>
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
