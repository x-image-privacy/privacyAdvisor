import { Box, Container, Divider, Stack, StackDivider } from '@chakra-ui/react'
import LikertScaleQuestion from 'src/components/LikertScaleQuestion/LikertScaleQuestion'

const GroupAPage = () => {
  return (
    <Container maxW="4xl">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="start"
        divider={<StackDivider borderColor="pink.100" />}
      >
        {/* <Box w="100px" p="2%"> */}
        <LikertScaleQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
        {/* </Box> */}

        {/* <Box w="100px" p="2%"> */}
        <LikertScaleQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
        {/* </Box> */}
      </Stack>
    </Container>
  )
}

export default GroupAPage
