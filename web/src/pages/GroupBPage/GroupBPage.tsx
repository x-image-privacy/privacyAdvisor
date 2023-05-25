import {
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'

import { useState } from 'react'
import WordSurveyCell from 'src/components/WordSurveyCell/WordSurveyCell'
import WordImageCell from 'src/components/WordImageCell/WordImageCell'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'


const GroupBPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)
  const handleNextStep = () => {

    // Change page
    if (step === 2){
      navigate(routes.customerSatisfaction(), {replace: true})
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
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture with a visualisation to describe this image.
          Please answer some questions
        </Text>
        <WordImageCell imageNumber={step}/>
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