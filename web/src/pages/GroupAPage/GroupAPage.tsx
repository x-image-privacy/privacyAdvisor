import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import { NUMBER_OF_IMAGE, PAGE_GROUP_A } from 'web/config/constants'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import ImageCell from 'src/components/ImageCell'
import ImageSurveyCell from 'src/components/ImageSurveyCell'
import { isMilestone } from 'src/milestone'

const GroupAPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)

  isMilestone(PAGE_GROUP_A, currentUser?.milestone as string)

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
    <Container maxW="8xl">
      <Stack direction="column" gap={8} alignItems="center" mb={10}>
        <Container maxW="xl">
          <Stack gap={4} alignItems="center">
            <Text textAlign="center">
              You are shown an image with question on this image.
            </Text>
            <Text textAlign="center">
              Consider that you are publishing this image on a public social
              media.
            </Text>
            <Text textAlign="center"> Please answer some questions.</Text>
          </Stack>
        </Container>

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
