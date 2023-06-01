import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import { NUMBER_OF_IMAGE, PAGE_GROUP_B } from 'web/config/constants'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import WordImageCell from 'src/components/WordImageCell'
import WordSurveyCell from 'src/components/WordSurveyCell'

import { IsMilestone } from '../HomePage/HomePage'

const GroupBPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)

  IsMilestone(PAGE_GROUP_B, currentUser?.milestone as string)
  const handleNextStep = () => {
    // Change page
    if (step >= NUMBER_OF_IMAGE) {
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
