import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'

import { useAuth } from 'src/auth'
import ImageSurveyCell from 'src/components/ImageSurveyCell'
import ImageCell from 'src/components/ImageCell/ImageCell'
import { navigate, routes } from '@redwoodjs/router'

const GroupAPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)
  const handleNextStep = () => {

    // Change page
    if (step === 6){
      navigate(routes.groupB(), {replace: true})
    }
    // increment step
    setStep((s) => s + 1)
    
  }
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((s) => s - 1)
    }
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
