import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import { NUMBER_OF_IMAGE, PAGE_GROUP_B } from 'web/config/constants'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import WordImageCell from 'src/components/WordImageCell'
import WordSurveyCell from 'src/components/WordSurveyCell'
import { isMilestone } from 'src/milestone'

const GroupBPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)

  isMilestone(PAGE_GROUP_B, currentUser?.milestone as string)

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
    <Container maxW="15xl">
      <Stack direction="column" alignItems="center" gap={4} mb={10}>
        <Container maxW="xl">
          <Stack gap={4} alignItems="center">
            <Text textAlign="justify">
              You are shown an image with multiple word clouds. The words in
              this word cloud were obtained using AI. They are used to describe
              the image. The words have been grouped by concepts.
            </Text>
            <Text textAlign="justify">
              Consider that you are publishing this image on a public social
              media.
            </Text>
            <Text textAlign="justify"> Please answer some questions.</Text>
          </Stack>
        </Container>
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
