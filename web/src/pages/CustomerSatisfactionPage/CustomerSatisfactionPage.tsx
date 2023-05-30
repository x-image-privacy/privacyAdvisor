import { Container, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import CsatCell from 'src/components/CsatCell/CsatCell'
import NpsCell from 'src/components/NpsCell/NpsCell'
import UeqCell from 'src/components/UeqCell/UeqCell'
import DemographicCell from 'src/components/DemographicCell/DemographicCell'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'


const CustomerSatisfactionPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    if (step >= 4) {
      navigate(routes.endSurvey(), {replace: true})
      return;
    }
    setStep((s) => s + 1)
  }
  return (
    <Container maxW="6xl">
    <Stack direction="column" gap={8} alignItems="center">
      <Text data-testid="instruction">
        Please answer some questions
      </Text>

      {step == 1 && 
        <CsatCell
        userId={currentUser?.id as number}
        onFinished={handleNextStep}/> 
      }
      {step == 2 &&
        <NpsCell
        userId={currentUser?.id as number}
        onFinished={handleNextStep} /> 
      }

      {step == 3 && 
        <UeqCell 
        userId={currentUser?.id as number}
        onFinished={handleNextStep} />
      }

      {step == 4 &&
        <DemographicCell 
        userId={currentUser?.id as number}
        onFinished={handleNextStep} />
      }

    </Stack>
  </Container>
  )
}

export default CustomerSatisfactionPage
