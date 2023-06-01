import { Flex, Image, Heading, Container, Text, Stack } from '@chakra-ui/react'

import { useAuth } from 'src/auth'
import PrizeCell from 'src/components/PrizeCell'

const EndSurveyPage = () => {
  const { currentUser } = useAuth()

  return (
    <Flex display="flex" flexDir="column" alignItems="center" gap={3}>
      <Image src="/assets/appreciate_it.svg" w="300px" />
      <Heading mb={4}>Thank you</Heading>

      <Container size="lg">
        <Stack direction="column" gap={4} alignItems="center">
          <Text align="center">
            This study has been completed. If you would like to be in with a
            chance of winning one of the prizes, please enter your email address
            here:
          </Text>

          <PrizeCell id={currentUser?.id as number} />
          <Text as="i" align="center">
            Thank you for your participation. You can close this page.
          </Text>
        </Stack>
      </Container>
    </Flex>
  )
}

export default EndSurveyPage
