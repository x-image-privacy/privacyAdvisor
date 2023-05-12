import { Container, Stack, Text } from '@chakra-ui/react'
import { Form, Submit } from '@redwoodjs/forms'
import { NPS_OPEN_QUESTION, NPS_RANK_QUESTION } from 'web/config/constants'
import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from 'src/components/OpenEndedQuestionField/OpenEndedQuestionField'

const NpsPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-tesid="instruction">
          Please answer this question on the interface
        </Text>
        <Form onSubmit={(data) => console.log(data)}>
          <Stack direction="column" gap={8} alignItems="start">
            <LikertScaleQuestionField
              name={NPS_RANK_QUESTION}
              n={11}
              question="How likely are you to recommend this interface to a friend?"
              text={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
              direction="row"
            />
            <OpenEndedQuestionField
              question="Tell us a bit more about why you chosee this rating"
              name={NPS_OPEN_QUESTION}
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

export default NpsPage
