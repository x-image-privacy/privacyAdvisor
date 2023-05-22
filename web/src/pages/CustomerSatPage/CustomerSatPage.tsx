import { Button, Container, Stack, Text } from '@chakra-ui/react'
import { CSAT_OPEN_QUESTION, CSAT_RANK_QUESTION } from 'web/config/constants'

import { Form } from '@redwoodjs/forms'

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
          <Stack direction="column" gap={8} alignItems="start">
            <LikertScaleQuestionField
              name={CSAT_RANK_QUESTION}
              n={5}
              question="How satisfied are you with the interface?"
              text={[
                'Very satisfied',
                'Satisfied',
                'Neutral',
                'Dissatisfied',
                'Very dissatisfied',
              ]}
              direction="column"
            />
            <OpenEndedQuestionField
              question="What is the biggest value you get from using this interface?"
              name={CSAT_OPEN_QUESTION}
              placeholder="Justify here..."
            />
            <Button type="submit">Save</Button>
          </Stack>
        </Form>
      </Stack>
    </Container>
  )
}

export default CsatPage
