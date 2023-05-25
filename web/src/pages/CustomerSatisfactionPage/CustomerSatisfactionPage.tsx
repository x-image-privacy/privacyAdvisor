import { Container, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import CsatCell from 'src/components/CsatCell/CsatCell'
import NpsCell from 'src/components/NpsCell/NpsCell'
import UeqCell from 'src/components/UeqCell/UeqCell'
import DemographicCell from 'src/components/DemographicCell/DemographicCell'
import { navigate, routes } from '@redwoodjs/router'


const CustomerSatisfactionPage = () => {
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    setStep((s) => s + 1)
    // navigate(routes.home(), {replace: true})
  }
  return (
    <Container maxW="6xl">
    <Stack direction="column" gap={8} alignItems="center">
      <Text data-testid="instruction">
        You are shown a picture and please answer some questions
      </Text>
      <Text>Current Step: {step}</Text>

      {step == 1 && 
        <CsatCell
          userId={6}
          onFinished={handleNextStep}/> 
      }
      {step == 2 &&
        <NpsCell
          userId={6}
        onFinished={handleNextStep} /> 
      }

      {step == 3 && 
        <UeqCell 
          userId={6}
          onFinished={handleNextStep} />
      }

      {step == 4 &&
        <DemographicCell 
          userId={6}
          onFinished={handleNextStep} />
      }

    </Stack>
  </Container>
  )
}

export default CustomerSatisfactionPage
