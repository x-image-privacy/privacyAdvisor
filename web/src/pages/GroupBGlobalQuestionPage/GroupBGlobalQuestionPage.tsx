import { Container, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
import {
  GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B,
  JUSTIFY_VISUALISATION_GROUP_B,
} from 'web/config/constants'
import JustifyQuestionField from 'src/components/JustifyQuestionField/JustifyQuestionField'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'

const GroupBGlobalQuestionPage = () => {
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
            divider={<StackDivider borderColor="grayIcon" />}
          >
            <Stack direction="column" spacing={4} justifyContent="start">
              <LikertScaleQuestionField
                name={GLOBAL_LIKERT_SCALE_QUESTION_GROUP_B}
                n={5}
                question="Is this image private?"
                leftHand="No"
                rightHand="Yes"
              />
              <JustifyQuestionField
                placeholder="Justify here..."
                name={JUSTIFY_VISUALISATION_GROUP_B}
              />
            </Stack>
            <Submit className="button" color="grayIcon">
              Save
            </Submit>
          </Stack>
        </Form>
      </Stack>
    </Container>
  )
}

export default GroupBGlobalQuestionPage
