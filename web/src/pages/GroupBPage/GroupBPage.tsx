import {
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'

import { useState } from 'react'
import WordSurveyCell from 'src/components/WordSurveyCell/WordSurveyCell'
import WordImageCell from 'src/components/WordImageCell/WordImageCell'


const GroupBPage = () => {
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    setStep((s) => s + 1)
  }

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep((s) => s - 1)
    }
  }

  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture with a visualisation to describe this image.
          Please answer some questions
        </Text>
        <WordImageCell id={step}/>
        <WordSurveyCell
        userId={1}
        imageId={step}
        onFinished={handleNextStep}
        onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupBPage