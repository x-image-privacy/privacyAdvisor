import { Container, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from 'src/components/OpenEndedQuestionField/OpenEndedQuestionField'
import Routes from 'src/Routes'
import {
  IS_PRIVATE_QUESTION_GROUP_B,
  PRIVATE_ELEMENTS_QUESTION_GROUP_B,
  PUBLIC_ELEMENTS_QUESTION_GROUP_B,
} from 'web/config/constants'

// const submit = (data: any) => {
//   console.log(data)

//   Routes.groupBGlobalQuestion()
// }

const GroupBPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture with a visualisation to describe this image.
          Please answer some questions
        </Text>
        <Image src="/data/image1.jpg" />
        <Form onSubmit={(data) => console.log(data)}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="start"
            divider={<StackDivider borderColor="grayIcon" />}
          >
            <LikertScaleQuestionField
              name={IS_PRIVATE_QUESTION_GROUP_B}
              n={5}
              question="Is this image private?"
              leftHand="No"
              rightHand="Yes"
            />
            <OpenEndedQuestionField
              question="Which elements do you consider as public in this image?"
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
              placeholder="Answer here..."
            />
            <OpenEndedQuestionField
              question="Which elements would you feel uncomfortable disclosing in this image?"
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
              placeholder="Answer here..."
            />
            <Submit className="button" color="grayIcon">
              Save
            </Submit>
          </Stack>
        </Form>
      </Stack>
    </Container>
  )
}

export default GroupBPage
