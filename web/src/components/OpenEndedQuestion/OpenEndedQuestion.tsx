import { ChangeEventHandler } from 'react'

import { Stack, Text, Input, Square } from '@chakra-ui/react'

export type OpenEndedQuestionProps = {
  question?: string
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
    <Stack alignItems="start" direction="row" gap={2}>
      {question && (
        <Stack alignItems="start" direction="column">
          <Square size="20px" bg="grayIcon" data-testid="square" />
        </Stack>
      )}
      <Stack alignItems="start" direction="column">
        {question && <Text data-testid="question">{question}</Text>}
        <Input
          placeholder={placeholder}
          size="lg"
          onChange={onChange}
          value={value}
          data-testid="input"
        />
      </Stack>
    </Stack>
  )
}

export default OpenEndedQuestion
