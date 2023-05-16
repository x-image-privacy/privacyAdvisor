import { Container, Image, Stack, Text } from '@chakra-ui/react'
import { Form, SubmitHandler } from '@redwoodjs/forms'


import ImageSurveyCell, { PlainImageSurveyValues } from 'src/components/ImageSurveyCell'


const GroupAPage = () => {

  const onSubmit: SubmitHandler<PlainImageSurveyValues> = (data) => {
    console.log(data)
  }

  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture and please answer some questions
        </Text>
        <Image src="/data/image1.jpg" />
        <Form onSubmit={onSubmit} config={{mode: 'onBlur'}}>
      <ImageSurveyCell id={2}/>
      </Form>
      </Stack>
    </Container>
  )
}

export default GroupAPage
