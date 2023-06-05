import { useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import { PAGE_SURVEY } from 'web/config/constants'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import CsatCell from 'src/components/CsatCell'
import DemographicCell from 'src/components/DemographicCell'
import NpsCell from 'src/components/NpsCell'
import UeqCell from 'src/components/UeqCell'
import { isMilestone } from 'src/milestone'

const CustomerSatisfactionPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)

  isMilestone(PAGE_SURVEY, currentUser?.milestone as string)

  const handleNextStep = () => {
    if (step >= 4) {
      navigate(routes.endSurvey(), { replace: true })
      return
    }
    setStep((s) => s + 1)
  }
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Container maxW="xl">
          <Stack gap={4} alignItems="center">
            <Text>
              Consider an interface with the image and the word cloud. You use
              this interface before publising an image on a public social media.
            </Text>

            <Text> Please answer some questions about this interface.</Text>
          </Stack>
        </Container>

        {step == 1 && (
          <CsatCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}
        {step == 2 && (
          <NpsCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}

        {step == 3 && (
          <UeqCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}

        {step == 4 && (
          <DemographicCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}
      </Stack>
    </Container>
  )
}

export default CustomerSatisfactionPage
