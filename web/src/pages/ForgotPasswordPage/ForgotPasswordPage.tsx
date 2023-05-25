import { useEffect } from 'react'

import {
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Button,
  HStack,
  Container,
} from '@chakra-ui/react'

import { navigate, routes, Link as RedwoodLink } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ParticipateButton from 'src/components/ParticipateButton/ParticipateButton'

const ForgotPasswordPage = () => {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main>
        <Flex display="flex" m={8} flexDir="column" alignItems="center" gap={6}>
          <Image src="/assets/forgot-password.svg" w="300px" />
          <Heading mb={4}>Forgot password</Heading>

          <Container size="lg">
            <Flex direction="column" gap={4}>
              <Text align="center">
                We currently do not support resetting user passwords.
              </Text>
              <Text align="center">
                In case you forgot your password, you should got to the
                <Link href={routes.home()}>Home Page</Link> and create a new
                user in order to complete the study. Alternatively you can click
                the participate button bellow.
              </Text>
            </Flex>
          </Container>
          <HStack>
            <Button as={RedwoodLink} to={routes.home()}>
              Back
            </Button>
            <ParticipateButton />
          </HStack>
        </Flex>
      </main>
    </>
  )
}

export default ForgotPasswordPage
