import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'

import ImageSurveyCell from 'src/components/ImageSurveyCell'
import ImageCell from 'src/components/Image/ImageCell'
import { navigate, routes } from '@redwoodjs/router'

const GroupAPage = () => {
  // const {user} = useAuth();
  const [step, setStep] = useState(1)
  const handleNextStep = () => {

    // Change page
    if (step === 13){
      // TODO: change user.hasInterface = true
      navigate(routes.groupB(), {replace: true})
    }
    // increment step
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
