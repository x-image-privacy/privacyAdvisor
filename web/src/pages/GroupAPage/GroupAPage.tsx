import { useEffect, useState } from 'react'

import { Box, Container, Progress, Stack, Text } from '@chakra-ui/react'
import {
  MILESTONE_GROUP_B,
  NUMBER_OF_IMAGE,
  PAGE_GROUP_A,
} from 'web/config/constants'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ImageCell from 'src/components/ImageCell'
import ImageSurveyCell from 'src/components/ImageSurveyCell'
import { isMilestone } from 'src/milestone'

const UPDATE_USER_IMAGE_SURVEY = gql`
  mutation UpdateUserImageSurvey($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      milestone
    }
  }
`

const GroupAPage = () => {
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
            milestone: MILESTONE_GROUP_B,
          },
        },
      })
      return
    }

    // increment step
    setStep((s) => s + 1)
  }
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((s) => s - 1)
    }
  }

  useEffect(() => {
    isMilestone(PAGE_GROUP_A, currentUser?.milestone as string)
  })

  return (
    <Container maxW="8xl">
      <Stack direction="column" gap={8} alignItems="center" mb={10}>
        <Container maxW="xl">
          <Stack gap={4} alignItems="center">
            <Text textAlign="center">
              You are shown an image with question on this image.
            </Text>
            <Text textAlign="center">
              Consider that you are publishing this image on public social
              media.
            </Text>
            <Text textAlign="center"> Please answer some questions.</Text>
            <Box w="100%">
              <Progress
                colorScheme="gray"
                value={(step * 100) / NUMBER_OF_IMAGE}
                size="sm"
              />
            </Box>
          </Stack>
        </Container>

        <ImageCell imageNumber={step} />
        <ImageSurveyCell
          userId={currentUser?.id as number}
          imageId={step}
          onFinished={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      </Stack>
    </Container>
  )
}

export default GroupAPage
