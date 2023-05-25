import { Flex, Radio, RadioGroup, Square, Stack, Text } from '@chakra-ui/react'

export type LikertScaleQuestionProps = {
  n: 5 | 7 | 11 | 6 | 4
  question?: string
  leftHand?: string
  rightHand?: string
  text?: string[]
  onChange: (nextValue: string) => void
  value: string
  direction?: 'row' | 'column'
}

const LikertScaleQuestion = ({
  n,
  question,
  leftHand,
  rightHand,
  text,
  onChange,
  value,
  direction = 'row',
}: LikertScaleQuestionProps) => {
  // Array of [1, 2, ..., n]
  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  const scale = Array.from({ length: n }, (_, i) => i + 1)
  return (
    <Stack alignItems="center">
      {question && (
        <Stack direction="row">
          <Square size="20px" bg="grayIcon" data-testid="square" />
          <Text data-testid="question">{question}</Text>
        </Stack>
      )}
      <Flex alignItems="center" gap={2}>
        {leftHand && <Text data-testid="left">{leftHand}</Text>}
        <RadioGroup onChange={onChange} value={value}>
          {text ? (
            <Stack direction={direction}>
              {/* https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react
            create a n scale radio component*/}
              {scale.map((item, _) => {
                return (
                  <Radio
                    data-testid={`radio${item}`}
                    value={item.toString()}
                    key={item}
                  >
                    {text[item - 1]}
                  </Radio>
                )
              })}
            </Stack>
          ) : (
            <Stack direction={direction}>
              {scale.map((item, _) => {
                return (
                  <Radio
                    data-testid={`radio${item}`}
                    value={item.toString()}
                    key={item}
                  />
                )
              })}
            </Stack>
          )}
        </RadioGroup>

        {rightHand && <Text data-testid="right">{rightHand}</Text>}
      </Flex>
    </Stack>
  )
}

export default LikertScaleQuestion
