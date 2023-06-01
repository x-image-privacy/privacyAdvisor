import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import { NUMBER_OF_IMAGE, PAGE_GROUP_A } from 'web/config/constants'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import ImageCell from 'src/components/ImageCell'
import ImageSurveyCell from 'src/components/ImageSurveyCell'
import { IsMilestone } from 'src/pages/HomePage/HomePage'

const GroupAPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)

  IsMilestone(PAGE_GROUP_A, currentUser?.milestone as string)

  const handleNextStep = () => {
    // Change page
    if (step >= NUMBER_OF_IMAGE) {
      navigate(routes.groupB(), { replace: true })
      return
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
      <Stack direction="column" gap={8} alignItems="center" mb={10}>
        <Text data-testid="instruction">
          You are shown a picture and please answer some questions
        </Text>
        <ImageCell imageNumber={step} />
        <ImageSurveyCell
          userId={currentUser?.id as number}
          imageId={step}
          onFinished={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupAPage
