import {
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'

import { useState } from 'react'
import WordSurveyCell from 'src/components/WordSurveyCell/WordSurveyCell'

import ImageCell from 'src/components/Image/ImageCell'


const GroupBPage = () => {
  const [step, setStep] = useState(1)
  const handleNextStep = () => {
    setStep((s) => s + 1)
  }

  const handlePreviousStep = () => {
    setStep((s) => s - 1)
  }

  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture with a visualisation to describe this image.
          Please answer some questions
        </Text>
        <ImageCell id={step}/>
        <WordSurveyCell
        userId={1}
        imageId={step}
        onFinised={handleNextStep}
        onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupBPage

{/* <Wordcloud
            data={[
              { id: 'word-1', text: ' Big word ', coef: 0.99 },
              { id: 'word-2', text: 'hello', coef: 0.8 },
              { id: 'word-4', text: 'caramba', coef: 0.97 },
              { id: 'word-3', text: 'all', coef: 0.74 },
              { id: 'word-5', text: 'Piniata', coef: 0.6 },
              { id: 'word-6', text: 'Taxi', coef: 0.93 },
              { id: 'word-7', text: 'papa', coef: 0.94 },
              { id: 'word-8', text: 'chicita', coef: 0.66 },
              { id: 'word-9', text: 'hellicopter', coef: 0.92 },
              { id: 'word-10', text: 'chiold', coef: 0.75 },
              { id: 'word-11', text: 'text', coef: 0.81 },
              { id: 'word-12', text: 'document', coef: 0.77 },
              { id: 'word-13', text: 'text', coef: 0.89 },
              { id: 'word-14', text: 'finger', coef: 0.91 },
              { id: 'word-15', text: 'girl', coef: 0.88 },
            ]}
          /> */}