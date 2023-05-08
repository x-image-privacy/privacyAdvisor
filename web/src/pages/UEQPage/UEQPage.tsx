import { Container, Flex, Square, Stack, Text } from '@chakra-ui/react'
import { Form } from '@redwoodjs/forms'
import {
  UEQ_QUESTION_1,
  UEQ_QUESTION_2,
  UEQ_QUESTION_3,
  UEQ_QUESTION_4,
  UEQ_QUESTION_5,
  UEQ_QUESTION_6,
  UEQ_QUESTION_7,
  UEQ_QUESTION_8,
} from 'web/config/constants'
import UeqQuestionField from 'src/components/UEQQuestionField/UEQQuestionField'

const UeqPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text>Please answer this question on the interface</Text>
        <Form onSubmit={(data) => console.log(data)}>
          <Stack gap={4} alignItems="start">
            <Stack direction="row">
              <Square size="20px" bg="grayIcon" />
              <Text>Choose the correct </Text>
            </Stack>
            <Stack direction="column" gap={4} alignContent="center">
              <UeqQuestionField
                name={UEQ_QUESTION_1}
                leftHand="Obstructive"
                rightHand="Supportive"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_2}
                leftHand="Complicated"
                rightHand="Easy"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_3}
                leftHand="Inefficient"
                rightHand="Efficient"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_4}
                leftHand="Confusing"
                rightHand="Clear"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_5}
                leftHand="Boring"
                rightHand="Exciting"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_6}
                leftHand="Not interesting"
                rightHand="Interesting"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_7}
                leftHand="Conventional"
                rightHand="Inventive"
              />
              <UeqQuestionField
                name={UEQ_QUESTION_8}
                leftHand="Usual"
                rightHand="Leading edge"
              />
            </Stack>
          </Stack>
        </Form>
      </Stack>
    </Container>
  )
}

export default UeqPage
