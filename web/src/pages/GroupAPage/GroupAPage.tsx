import { Container, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
import { colors } from 'src/App'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from 'src/components/OpenEndedQuestionField/OpenEndedQuestionField'

const GroupAPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture and please answer some questions
        </Text>
        <Image src="/data/image1.jpg" />
        <Form onSubmit={(data) => console.log(data)}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="start"
            divider={<StackDivider borderColor={colors.brand.gray} />}
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
              question="Which elements would you feel uncomfortable disclosing in this image?"
              name="Q3"
              placeholder="Answer here..."
            />
            <Submit className="button" color={colors.brand.gray}>
              Save
            </Submit>
          </Stack>
        </Form>
      </Stack>
    </Container>
  )
}

export default GroupAPage
