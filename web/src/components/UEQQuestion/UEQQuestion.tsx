import { Flex, Radio, RadioGroup, Square, Stack, Text } from '@chakra-ui/react'

export type UEQQuestionProps = {
  onChange: (nextValue: string) => void
  leftHand: string
  rightHand: string
  value: string
}
const UeqQuestion = ({
  leftHand,
  rightHand,
  onChange,
  value,
}: UEQQuestionProps) => {
  // Array of [1, 2, ..., n]
  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  const scale = Array.from({ length: 8 }, (_, i) => i + 1)
  return (
    <Stack alignItems="center">
      <Flex alignItems="center" gap={2}>
        <Text>{leftHand}</Text>
        <RadioGroup onChange={onChange} value={value}>
          {scale.map((item, _) => {
            return (
              <Radio data-testid={`radio${item}`} value={item} key={item} />
            )
          })}
        </RadioGroup>
        <Text>{rightHand}</Text>
      </Flex>
    </Stack>
  )
}

export default UeqQuestion
