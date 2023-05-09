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
  const n = 7
  const scale = Array.from({ length: n }, (_, i) => i + 1)
  return (
    <Flex alignItems="center" gap={2}>
      <Text>{leftHand}</Text>
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="row">
          {scale.map((item, _) => {
            return (
              <Radio data-testid={`radio${item}`} value={item} key={item} />
            )
          })}
        </Stack>
      </RadioGroup>
      <Text>{rightHand}</Text>
    </Flex>
  )
}

export default UeqQuestion
