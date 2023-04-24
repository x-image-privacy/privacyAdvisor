import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'

type Props = {
  n: number
  question: String
  leftHand: String
  rightHand: String
}

const LikertScaleQuestion = ({ n, question, leftHand, rightHand }: Props) => {
  const [value, setValue] = React.useState()

  // Array of [1, 2, ..., n]
  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  const scale = Array.from({ length: n }, (_, i) => i + 1)
  return (
    <Stack minWidth="max-content" alignItems="center">
      <Text>{question}</Text>
      <Flex alignItems="center" gap={2}>
        <Text>{leftHand}</Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            {/* https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react 
            create a n scale radio component*/}
            {scale.map((item, _) => {
              return <Radio value={item} />
            })}
          </Stack>
        </RadioGroup>
        <Text>{rightHand}</Text>
      </Flex>
    </Stack>
  )
}

export default LikertScaleQuestion
