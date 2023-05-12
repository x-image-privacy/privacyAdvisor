import { Box, Container, Flex, Square, Stack, Text } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
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
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'

const UeqPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text>Please answer this question on the interface</Text>
        <Form onSubmit={(data) => console.log(data)}>
          <Stack gap={4} alignItems="start">
            <Stack direction="row">
              <Square size="20px" bg="grayIcon" />
              <Text>You find the interface:</Text>
            </Stack>
            <Stack spacing="15px" align="stretch">
              <LikertScaleQuestionField
                name={UEQ_QUESTION_1}
                leftHand="Obstructive"
                rightHand="Supportive" 
                direction='row' 
                n={7}/>
              <LikertScaleQuestionField
                name={UEQ_QUESTION_2}
                leftHand="Complicated"
                rightHand="Easy"
                direction='row' 
                n={7}
              />
              <LikertScaleQuestionField
                name={UEQ_QUESTION_3}
                leftHand="Inefficient"
                rightHand="Efficient"
                direction='row' 
                n={7}
              />
              <LikertScaleQuestionField
                name={UEQ_QUESTION_4}
                leftHand="Confusing"
                rightHand="Clear"
                direction='row' 
                n={7}
              />
              <LikertScaleQuestionField
                name={UEQ_QUESTION_5}
                leftHand="Boring"
                rightHand="Exciting"
                direction='row' 
                n={7}
              />
              <LikertScaleQuestionField
                name={UEQ_QUESTION_6}
                leftHand="Not interesting"
                rightHand="Interesting"
                direction='row' 
                n={7}
              />
              <LikertScaleQuestionField
                name={UEQ_QUESTION_7}
                leftHand="Conventional"
                rightHand="Inventive"
                direction='row' 
                n={7}
              />
              <LikertScaleQuestionField
                name={UEQ_QUESTION_8}
                leftHand="Usual"
                rightHand="Leading edge"
                direction='row' 
                n={7}
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

export default UeqPage
