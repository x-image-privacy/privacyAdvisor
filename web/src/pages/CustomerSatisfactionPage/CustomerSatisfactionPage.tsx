import { Container, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import ImageCell from 'src/components/ImageCell/ImageCell'
import CsatCell from 'src/components/CsatCell/CsatCell'
import NpsCell from 'src/components/NpsCell/NpsCell'
import UeqCell from 'src/components/UeqCell/UeqCell'
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
          userId={1}
          onFinished={handleNextStep}/> 
      }
      {step == 2 &&
        <NpsCell
          userId={1}
        onFinished={handleNextStep} /> 
      }

      {step == 3 && 
        <UeqCell 
          userId={1}
          onFinished={handleNextStep} />
      }

    </Stack>
  </Container>
  )
}

export default CustomerSatisfactionPage
