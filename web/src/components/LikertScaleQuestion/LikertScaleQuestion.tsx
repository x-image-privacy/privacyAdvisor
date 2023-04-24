import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'

type Props = {
  n: number
  question: String
  leftHand: String
  rightHand: String
}

const LikertScaleQuestion = ({ n, question, leftHand, rightHand }: Props) => {
  const [value, setValue] = React.useState()
  return (
    <Stack minWidth="max-content" alignItems="center">
      <Text>{question}</Text>
      <Flex alignItems="center" gap={2}>
        <Text>{leftHand}</Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1" />
            <Radio value="2" />
            <Radio value="3" />
            <Radio value="4" />
            <Radio value="5" />
          </Stack>
        </RadioGroup>
        <Text>{rightHand}</Text>
      </Flex>
    </Stack>
  )
}

export default LikertScaleQuestion
