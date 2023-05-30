import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import WordImageCell from 'src/components/WordImageCell'
import WordSurveyCell from 'src/components/WordSurveyCell'

const GroupBPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    // Change page
    if (step >= 2) {
      navigate(routes.customerSatisfaction(), { replace: true })
      return
    }

    setStep((s) => s + 1)
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((s) => s - 1)
    }
  }

  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center" mb={10}>
        <Text data-testid="instruction">
          You are shown a picture with a visualisation to describe this image.
          Please answer some questions
        </Text>
        <WordImageCell imageNumber={step} />
        <WordSurveyCell
          userId={currentUser?.id as number}
          imageId={step}
          onFinished={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupBPage
