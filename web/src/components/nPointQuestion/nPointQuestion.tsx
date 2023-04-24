import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'

const nPointQuestion = () => {
  const [value, setValue] = React.useState()
  return (
    <Stack minWidth="max-content" alignItems="center">
      <Text>Is this image private?</Text>
      <Flex alignItems="center" gap={2}>
        <Text>No</Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1" />
            <Radio value="2" />
            <Radio value="3" />
            <Radio value="4" />
            <Radio value="5" />
          </Stack>
        </RadioGroup>
        <Text>Yes</Text>
      </Flex>
    </Stack>
  )
}

export default nPointQuestion
