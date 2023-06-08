import { useEffect, useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import {
  MILESTONE_SURVEY,
  NUMBER_OF_IMAGE,
  PAGE_GROUP_B,
} from 'web/config/constants'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import WordImageCell from 'src/components/WordImageCell'
import WordSurveyCell from 'src/components/WordSurveyCell'
import { isMilestone } from 'src/milestone'

const UPDATE_USER_IMAGE_SURVEY = gql`
  mutation UpdateUserImageSurvey($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      milestone
    }
  }
`
const GroupBPage = () => {
  const { currentUser, reauthenticate } = useAuth()
  const [step, setStep] = useState(1)
  const [updateUser] = useMutation(UPDATE_USER_IMAGE_SURVEY, {
    onCompleted: reauthenticate,
  })

  const handleNextStep = () => {
    // Change page
    if (step >= NUMBER_OF_IMAGE) {
      updateUser({
        variables: {
          id: currentUser?.id,
          input: {
            milestone: MILESTONE_SURVEY,
          },
        },
      })
      return
    }

    setStep((s) => s + 1)
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((s) => s - 1)
    }
  }

  useEffect(() => {
    isMilestone(PAGE_GROUP_B, currentUser?.milestone as string)
  })

  return (
    <Container maxW="15xl">
      <Stack direction="column" alignItems="center" gap={4} mb={10}>
        <Container maxW="xl">
          <Stack gap={4} alignItems="center">
            <Text textAlign="justify">
              You are shown an image with multiple word clouds. The words in
              this word cloud were obtained using AI. They are used to describe
              the image. The words have been grouped by concepts.
            </Text>
            <Text textAlign="justify">
              Consider that you are publishing this image on a public social
              media.
            </Text>
            <Text textAlign="justify"> Please answer some questions.</Text>
          </Stack>
        </Container>
        <WordImageCell imageNumber={step} />
        <WordSurveyCell
          userId={currentUser?.id as number}
          imageId={step}
          onFinished={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupBPage
