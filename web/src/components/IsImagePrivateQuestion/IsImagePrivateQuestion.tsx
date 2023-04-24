import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'

const IsImagePrivateQuestion = () => {
  const [value, setValue] = React.useState()
  return (
    <Box w="100%" p="2%">
      <Text>Is this image private?</Text>
      <Flex minWidth="max-content" alignItems="center">
        <Box>
          <Text>No</Text>
        </Box>
        <Spacer />
        <Box>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="1"> </Radio>
              <Radio value="2"> </Radio>
              <Radio value="3"> </Radio>
              <Radio value="4"> </Radio>
              <Radio value="5"> </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Spacer />
        <Box>
          <Text>Yes</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default IsImagePrivateQuestion
