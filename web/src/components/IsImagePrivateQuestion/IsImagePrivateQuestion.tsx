import { Box, Flex, Radio, RadioGroup, Spacer, Stack } from '@chakra-ui/react'

const IsImagePrivateQuestion = () => {
  const [value, setValue] = React.useState()
  return (
    <Box w="220px">
      <p>Is this image private?</p>
      <Flex minWidth="max-content" alignItems="center">
        <Box>
          <p>No</p>
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
          <p>Yes</p>
        </Box>
      </Flex>
    </Box>
  )
}

export default IsImagePrivateQuestion
