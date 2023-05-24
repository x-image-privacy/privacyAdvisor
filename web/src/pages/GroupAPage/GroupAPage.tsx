import { useState } from 'react'

import { Container, Image, Stack, Text } from '@chakra-ui/react'

import { useAuth } from 'src/auth'
import ImageSurveyCell from 'src/components/ImageSurveyCell'

const GroupAPage = () => {
  const { currentUser } = useAuth()
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
        <Image src="/data/image1.jpg" />
        <ImageSurveyCell
          userId={currentUser?.id as string}
          imageId={step}
          onFinished={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupAPage
