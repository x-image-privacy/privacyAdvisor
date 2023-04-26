import { Container, Stack, StackDivider } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
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
        <Form onSubmit={(data) => console.log(data)}>
          <LikertScaleQuestionField
            name="Q1"
            n={5}
            question="Is this image private?"
            leftHand="No"
            rightHand="Yes"
          />
          <Submit>Save</Submit>
        </Form>
      </Stack>
    </Container>
  )
}

export default GroupAPage
