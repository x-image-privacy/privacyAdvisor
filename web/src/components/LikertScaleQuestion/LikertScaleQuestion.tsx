import { Flex, Radio, RadioGroup, Square, Stack, Text } from '@chakra-ui/react'

export type LikertScaleQuestionProps = {
  n: 5 | 7
  question: string
  leftHand: string
  rightHand: string
  onChange: (nextValue: string) => void
  value: string
}

const LikertScaleQuestion = ({
  n,
  question,
  leftHand,
  rightHand,
  onChange,
  value,
}: LikertScaleQuestionProps) => {
  // Array of [1, 2, ..., n]
  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  const scale = Array.from({ length: n }, (_, i) => i + 1)
  return (
    <Stack alignItems="center">
      <Stack direction="row">
        <Square size="20px" bg="grayIcon" data-testid="square" />
        <Text data-testid="question">{question}</Text>
      </Stack>
      <Flex alignItems="center" gap={2}>
        <Text data-testid="left">{leftHand}</Text>
        <RadioGroup onChange={onChange} value={value}>
          <Stack direction="row">
            {/* https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react 
            create a n scale radio component*/}
            {scale.map((item, _) => {
              return (
                <Radio data-testid={`radio${item}`} value={item} key={item} />
              )
            })}
          </Stack>
        </RadioGroup>
        <Text data-testid="right">{rightHand}</Text>
      </Flex>
    </Stack>
  )
}

export default LikertScaleQuestion
