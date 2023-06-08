import { useEffect, useState } from 'react'

import { Container, Stack, Text } from '@chakra-ui/react'
import { MILESTONE_END, PAGE_SURVEY } from 'web/config/constants'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import CsatCell from 'src/components/CsatCell'
import DemographicCell from 'src/components/DemographicCell'
import NpsCell from 'src/components/NpsCell'
import UeqCell from 'src/components/UeqCell'
import { isMilestone } from 'src/milestone'

const UPDATE_USER_IMAGE_SURVEY = gql`
  mutation UpdateUserImageSurvey($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      milestone
    }
  }
`

const CustomerSatisfactionPage = () => {
  const { currentUser, reauthenticate } = useAuth()
  const [step, setStep] = useState(1)
  const [updateUser] = useMutation(UPDATE_USER_IMAGE_SURVEY, {
    onCompleted: reauthenticate,
  })

  const handleNextStep = () => {
    // Change page
    if (step >= 4) {
      updateUser({
        variables: {
          id: currentUser?.id,
          input: {
            milestone: MILESTONE_END,
          },
        },
      })
      return
    }
    setStep((s) => s + 1)
  }

  useEffect(() => {
    isMilestone(PAGE_SURVEY, currentUser?.milestone as string)
  })
  return (
    <Container maxW="8xl">
      <Stack direction="column" gap={8} alignItems="center">
        <Container maxW="xl">
          <Stack gap={4} alignItems="center">
            {step <= 3 && (
              <>
                <Text textAlign="justify">
                  Consider an interface with the image and the word cloud from
                  the previous question. You use this interface before
                  publishing an image on a public social media.
                </Text>
                <Text textAlign="justify">
                  Please answer some questions about this interface.
                </Text>
              </>
            )}
            {step >= 4 && (
              <>
                <Text textAlign="justify">
                  We will ask you a few questions about your profile to help us
                  better understand your background. If you do not want to
                  answer, select "Prefer not to say".
                </Text>
                <Text textAlign="center">Please answer some questions.</Text>
              </>
            )}
          </Stack>
        </Container>

        {step == 1 && (
          <CsatCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}
        {step == 2 && (
          <NpsCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}

        {step == 3 && (
          <UeqCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}

        {step == 4 && (
          <DemographicCell
            userId={currentUser?.id as number}
            onFinished={handleNextStep}
          />
        )}
      </Stack>
    </Container>
  )
}

export default CustomerSatisfactionPage
