import { useState } from 'react'

import { Flex, Image, Heading, Container, Text, Stack } from '@chakra-ui/react'
import { PAGE_END } from 'web/config/constants'

import { useAuth } from 'src/auth'
import PrizeCell from 'src/components/PrizeCell'
import { isMilestone } from 'src/milestone'

const EndSurveyPage = () => {
  const { currentUser } = useAuth()
  const [step, setStep] = useState(1)

  isMilestone(PAGE_END, currentUser?.milestone as string)

  const handleNextStep = () => {
    if (step >= 2) {
      return
    }
    setStep((s) => s + 1)
  }

  return (
    <Flex display="flex" flexDir="column" alignItems="center" gap={3}>
      <Image src="/assets/appreciate_it.svg" w="300px" />
      <Heading mb={4}>Thank you</Heading>

      <Container size="lg">
        <Stack direction="column" gap={4} alignItems="center">
          <Text textAlign="justify">
            This study has been completed. If you would like to be in with a
            chance of winning one of the prizes, please enter your email address
            here:
          </Text>

          {step == 1 && (
            <PrizeCell
              id={currentUser?.id as number}
              onFinished={handleNextStep}
            />
          )}
          <Text as="i" align="center">
            Thank you for your participation. You can close this page.
          </Text>
        </Stack>
      </Container>
    </Flex>
  )
}

export default EndSurveyPage
