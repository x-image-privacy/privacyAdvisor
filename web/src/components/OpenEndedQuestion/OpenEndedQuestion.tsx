import { ChangeEventHandler } from 'react'

import { Stack, Text, Input, Square, Box, Flex } from '@chakra-ui/react'

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
    <Stack alignItems="center">
      {question && <Stack direction="row">
        <Square size="20px" bg="grayIcon" data-testid="square" />
        <Text data-testid="question">{question}</Text>
      </Stack>}
      <Box w='100%'>
        <Input
        placeholder={placeholder}
        size="lg"
        onChange={onChange}
        value={value}
        data-testid="input"
      />
      </Box>
    </Stack>
  )
}

export default OpenEndedQuestion
