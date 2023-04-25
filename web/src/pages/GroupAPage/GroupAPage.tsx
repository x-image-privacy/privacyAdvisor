import { Container, Stack, StackDivider } from '@chakra-ui/react'
import LikertScaleQuestion from 'src/components/LikertScaleQuestion/LikertScaleQuestion'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'

const GroupAPage = () => {
  return (
    <Container maxW="4xl">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="start"
        divider={<StackDivider borderColor="pink.100" />}
      >
        <LikertScaleQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />

        <LikertScaleQuestionField
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
      </Stack>
    </Container>
  )
}

export default GroupAPage
