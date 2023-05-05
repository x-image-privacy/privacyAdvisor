import { Container, Stack, Text } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
import { CSAT_OPEN_QUESTION, CSAT_RANK_QUESTION } from 'web/config/constants'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from 'src/components/OpenEndedQuestionField/OpenEndedQuestionField'

const CsatPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-tesid="instruction">
          Please answer this question on the interface
        </Text>
        <Form onSubmit={(data) => console.log(data)}>
          <Stack direction="column" spacing={4}>
            <LikertScaleQuestionField
              name={CSAT_RANK_QUESTION}
              n={5}
              question="How satisfied are you with the interface?"
              leftHand="yes"
              rightHand="no"
            />
            <OpenEndedQuestionField
              question="What is the biggest value you get from using this interface?"
              name={CSAT_OPEN_QUESTION}
              placeholder="Justify here..."
            />
          </Stack>
          <Submit className="button" color="grayIcon">
            Save
          </Submit>
        </Form>
      </Stack>
    </Container>
  )
}

export default CsatPage
