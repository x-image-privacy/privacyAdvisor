import { useState } from 'react'

import { Container, Image, Stack, Text } from '@chakra-ui/react'

import ImageSurveyCell from 'src/components/ImageSurveyCell'
import ImageCell from 'src/components/Image/ImageCell'

const GroupAPage = () => {
  // const {user} = useAuth();
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    // increment step
    setStep((s) => s + 1)
  }
  const handlePreviousStep = () => {
    setStep((s) => s - 1)
  }
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture and please answer some questions
        </Text>
        <Text>Current Step: {step}</Text>
        <ImageCell id={step} />
        <ImageSurveyCell
          userId={1}
          imageId={step}
          onFinished={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupAPage
