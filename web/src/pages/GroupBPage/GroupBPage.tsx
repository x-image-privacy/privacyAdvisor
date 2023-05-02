import {
  Container,
  Flex,
  Image,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import Wordcloud from '@x-image-privacy/wordcloud'
import {
  IS_PRIVATE_QUESTION_GROUP_B,
  PRIVATE_ELEMENTS_QUESTION_GROUP_B,
  PUBLIC_ELEMENTS_QUESTION_GROUP_B,
} from 'web/config/constants'

import { Form, Submit } from '@redwoodjs/forms'

import LikertScaleQuestionField from 'src/components/LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from 'src/components/OpenEndedQuestionField/OpenEndedQuestionField'

const GroupBPage = () => {
  return (
    <Container maxW="6xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Text data-testid="instruction">
          You are shown a picture with a visualisation to describe this image.
          Please answer some questions
        </Text>
        <Flex alignItems="center" gap={2}>
          <Image src="/data/image1.jpg" />
          <Wordcloud
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
          />
        </Flex>
        <Form onSubmit={(data) => console.log(data)}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="start"
            divider={<StackDivider borderColor="grayIcon" />}
          >
            <LikertScaleQuestionField
              name={IS_PRIVATE_QUESTION_GROUP_B}
              n={5}
              question="Is this image private?"
              leftHand="No"
              rightHand="Yes"
            />
            <OpenEndedQuestionField
              question="Which elements do you consider as public in this image?"
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_B}
              placeholder="Answer here..."
            />
            <OpenEndedQuestionField
              question="Which elements would you feel uncomfortable disclosing in this image?"
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_B}
              placeholder="Answer here..."
            />
            <Submit className="button" color="grayIcon">
              Save
            </Submit>
          </Stack>
        </Form>
      </Stack>
    </Container>
  )
}

export default GroupBPage
