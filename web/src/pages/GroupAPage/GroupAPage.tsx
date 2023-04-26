import { Container, Stack, StackDivider } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from 'src/components/OpenEndedQuestionField/OpenEndedQuestionField'

const GroupAPage = () => {
  return (
    <Container maxW="4xl">
      <Form onSubmit={(data) => console.log(data)}>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="start"
          divider={<StackDivider borderColor="pink.100" />}
        >
          <LikertScaleQuestionField
            name="Q1"
            n={5}
            question="Is this image private?"
            leftHand="No"
            rightHand="Yes"
          />
          <OpenEndedQuestionField
            question="Which elements do you consider as public in this image?"
            name="Q2"
            placeholder="Answer here..."
          />
          <OpenEndedQuestionField
            question="Which elements feel you uncomfortable disclosing in this image?"
            name="Q3"
            placeholder="Answer here..."
          />
          <Submit>Save</Submit>
        </Stack>
      </Form>
    </Container>
  )
}

export default GroupAPage
