import { Flex, Image, Heading, Container, Text, Stack } from '@chakra-ui/react'

import { useAuth } from 'src/auth'
import PrizeCell from 'src/components/PrizeCell'

const EndSurveyPage = () => {
  const { currentUser } = useAuth()

  return (
    <Flex display="flex" m={8} flexDir="column" alignItems="center" gap={6}>
      <Image src="/assets/appreciate_it.svg" w="300px" />
      <Heading mb={4}>Thank you</Heading>

      <Container size="lg">
        <Stack direction="column" gap={10} alignItems="center">
          <Text align="center">Thank you for your participation.</Text>
          <PrizeCell id={currentUser?.id as number} />
        </Stack>
      </Container>
    </Flex>
  )
}

export default EndSurveyPage
