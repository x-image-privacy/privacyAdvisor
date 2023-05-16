import { Container, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Form } from '@redwoodjs/forms'


import ImageSurveyCell from 'src/components/ImageSurveyCell'


const GroupAPage = () => {

  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture and please answer some questions
        </Text>
        <Image src="/data/image1.jpg" />
        <Form onSubmit={(data) => console.log(data)}>
      <ImageSurveyCell id={2}/>
      </Form>
      </Stack>
    </Container>
  )
}

export default GroupAPage
