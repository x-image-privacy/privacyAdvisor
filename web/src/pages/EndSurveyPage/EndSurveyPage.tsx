import { Flex, Image, Heading, Container, Text } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EndSurveyPage = () => {
  return (
   <Flex display="flex" m={8} flexDir='column' alignItems="center" gap={6}>
    <Image src="/assets/appreciate_it.svg" w="300px"/>
    <Heading mb={4}> Thank you</Heading>

    <Container size="lg">
            <Flex direction="column" gap={4}>
              <Text align="center">
                Thank you for your participation
              </Text>
              <Text align="center">
                Participation price here
              </Text>
            </Flex>
          </Container>
    

   </Flex>
  )
}

export default EndSurveyPage
