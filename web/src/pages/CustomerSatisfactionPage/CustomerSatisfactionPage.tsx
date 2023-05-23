import { Container, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import ImageCell from 'src/components/Image/ImageCell'
import CsatCell from 'src/components/CsatCell/CsatCell'
import { navigate, routes } from '@redwoodjs/router'


const CustomerSatisfactionPage = () => {
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    navigate(routes.home(), {replace: true})
  }
  return (
    <Container maxW="6xl">
    <Stack direction="column" gap={8} alignItems="center">
      <Text data-testid="instruction">
        You are shown a picture and please answer some questions
      </Text>
      <Text>Current Step: </Text>
      <ImageCell id={step} />
      <CsatCell
        userId={1}
        onFinished={handleNextStep}/>
    </Stack>
  </Container>
  )
}

export default CustomerSatisfactionPage
