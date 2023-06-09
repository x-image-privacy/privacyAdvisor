import { Box, Flex, Square, Stack, Text } from '@chakra-ui/react'
import {
  CreateCustomerSatisfactionSurvey,
  CreateCustomerSatisfactionSurveyVariables,
  CreateUserExperienceQuestionaireScore,
  CreateUserExperienceQuestionaireScoreVariables,
  FindUeqSurveyByUserId,
  UpdateCustomerSatisfactionSurvey,
  UpdateCustomerSatisfactionSurveyVariables,
} from 'types/graphql'
import {
  UEQ_CLARITY,
  UEQ_COMPLEXITY,
  UEQ_EFFICIENCY,
  UEQ_INTEREST,
  UEQ_MOTIVATION,
  UEQ_NORM,
  UEQ_ORIGINALITY,
  UEQ_SUPPORT,
} from 'web/config/constants'

import { FieldError, Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import SubmitButtons from '../SubmitButtons'

type UeqProps = {
  userId: number
  onFinished: () => void
}

export const QUERY = gql`
  query FindUeqSurveyByUserId($userId: Int!) {
    ueqSurvey: customerSatisfactionSurveyByUser(userId: $userId) {
      id
      user {
        id
      }
      ueq {
        id
        support
        complexity
        efficiency
        clarity
        motivation
        interest
        norm
        originality
      }
    }
  }
`

const CREATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation CreateCustomerSatisfactionSurveyUeq(
    $input: CreateCustomerSatisfactionSurveyInput!
  ) {
    createCustomerSatisfactionSurvey(input: $input) {
      id
      ueq {
        id
        support
        complexity
        efficiency
        clarity
        motivation
        interest
        norm
        originality
      }
    }
  }
`

const UPDATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation UpdateCustomerSatisfactionSurveyUeq(
    $id: Int!
    $input: UpdateCustomerSatisfactionSurveyInput!
  ) {
    updateCustomerSatisfactionSurvey(id: $id, input: $input) {
      id
      userId
      ueq {
        id
        support
        complexity
        efficiency
        clarity
        motivation
        interest
        norm
        originality
      }
    }
  }
`

const CREATE_UEQ_SCORE = gql`
  mutation CreateUserExperienceQuestionaireScore(
    $input: CreateUserExperienceQuestionaireScoreInput!
  ) {
    createUserExperienceQuestionaireScore(input: $input) {
      id
      support
      complexity
      efficiency
      clarity
      motivation
      interest
      norm
      originality
    }
  }
`

const UPDATE_UEQ_SCORE = gql`
  mutation UpdateUserExperienceQuestionaireScore(
    $id: Int!
    $input: UpdateUserExperienceQuestionaireScoreInput!
  ) {
    updateUserExperienceQuestionaireScore(id: $id, input: $input) {
      id
      support
      complexity
      efficiency
      clarity
      motivation
      interest
      norm
      originality
    }
  }
`

interface UeqValues {
  [UEQ_SUPPORT]: string
  [UEQ_COMPLEXITY]: string
  [UEQ_EFFICIENCY]: string
  [UEQ_CLARITY]: string
  [UEQ_MOTIVATION]: string
  [UEQ_INTEREST]: string
  [UEQ_NORM]: string
  [UEQ_ORIGINALITY]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: UeqProps) => <UeqSurveyComponent {...props} />

export const Failure = ({ error }: CellFailureProps<FindUeqSurveyByUserId>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindUeqSurveyByUserId> & UeqProps
) => <UeqSurveyComponent {...props} />

const UeqSurveyComponent = ({
  ueqSurvey,
  userId,
  onFinished,
}: FindUeqSurveyByUserId & UeqProps) => {
  const [
    createCustomerSurvey,
    { loading: loadingSurveyCreate, error: errorSurveyCreate },
  ] = useMutation<
    CreateCustomerSatisfactionSurvey,
    CreateCustomerSatisfactionSurveyVariables
  >(CREATE_CUSTOMER_SATISFACTION_SURVEY, {
    onError: () => {
      toast.error('Create survey fails.')
    },
  })

  const [
    updateCustomerSurvey,
    { loading: loadingSurveyUpdate, error: errorSurveyUpdate },
  ] = useMutation<
    UpdateCustomerSatisfactionSurvey,
    UpdateCustomerSatisfactionSurveyVariables
  >(UPDATE_CUSTOMER_SATISFACTION_SURVEY, {
    onError: () => {
      toast.error('Update survey fails.')
    },
  })

  const [createUeq, { loading: loadingUEQCreate, error: errorUEQCreate }] =
    useMutation<
      CreateUserExperienceQuestionaireScore,
      CreateUserExperienceQuestionaireScoreVariables
    >(CREATE_UEQ_SCORE, {
      onError: () => {
        toast.error('Create UEQ fails.')
      },
    })
  const [updateUeq, { loading: loadingUEQUpdate, error: errorUEQUpdate }] =
    useMutation(UPDATE_UEQ_SCORE, {
      onError: () => {
        toast.error('Update UEQ fails.')
      },
    })

  const onSubmit: SubmitHandler<UeqValues> = async (data) => {
    const supportRank = parseInt(data[UEQ_SUPPORT])
    const complexityRank = parseInt(data[UEQ_COMPLEXITY])
    const efficiencyRank = parseInt(data[UEQ_EFFICIENCY])
    const clarityRank = parseInt(data[UEQ_CLARITY])
    const motivationRank = parseInt(data[UEQ_MOTIVATION])
    const interestRank = parseInt(data[UEQ_INTEREST])
    const normRank = parseInt(data[UEQ_NORM])
    const originalityRank = parseInt(data[UEQ_ORIGINALITY])

    if (ueqSurvey && ueqSurvey.user.id) {
      if (ueqSurvey.ueq?.id) {
        await updateUeq({
          variables: {
            id: ueqSurvey.ueq.id,
            input: {
              support: supportRank,
              complexity: complexityRank,
              efficiency: efficiencyRank,
              clarity: clarityRank,
              motivation: motivationRank,
              interest: interestRank,
              norm: normRank,
              originality: originalityRank,
            },
          },
        })
      } else {
        const newUeq = await createUeq({
          variables: {
            input: {
              support: supportRank,
              complexity: complexityRank,
              efficiency: efficiencyRank,
              clarity: clarityRank,
              motivation: motivationRank,
              interest: interestRank,
              norm: normRank,
              originality: originalityRank,
            },
          },
        })

        await updateCustomerSurvey({
          variables: {
            id: ueqSurvey.id,
            input: {
              ueqId: newUeq.data?.createUserExperienceQuestionaireScore.id,
            },
          },
        })
      }
    } else {
      const newUeq = await createUeq({
        variables: {
          input: {
            support: supportRank,
            complexity: complexityRank,
            efficiency: efficiencyRank,
            clarity: clarityRank,
            motivation: motivationRank,
            interest: interestRank,
            norm: normRank,
            originality: originalityRank,
          },
        },
      })

      await createCustomerSurvey({
        variables: {
          input: {
            userId,
            ueqId: newUeq.data?.createUserExperienceQuestionaireScore.id,
          },
        },
      })
    }

    if (
      !errorSurveyCreate &&
      !errorSurveyUpdate &&
      !errorUEQCreate &&
      !errorUEQUpdate
    ) {
      onFinished()
    }
  }
  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Flex flexDirection="column" gap={12}>
        <Stack gap={4} alignItems="start">
          <Stack direction="row">
            <Square size="20px" bg="grayIcon" />
            <Text>You find the interface:</Text>
          </Stack>
          <Flex direction="column" alignItems="center" gap={5}>
            <Box>
              <LikertScaleQuestionField
                name={UEQ_SUPPORT}
                leftHand="Obstructive"
                rightHand="Supportive"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.support.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Support question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_SUPPORT} className="rw-field-error" />
            </Box>

            <Box>
              <LikertScaleQuestionField
                name={UEQ_COMPLEXITY}
                leftHand="Complicated"
                rightHand="Easy"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.complexity.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Complicated question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_COMPLEXITY} className="rw-field-error" />
            </Box>

            <Box>
              <LikertScaleQuestionField
                name={UEQ_EFFICIENCY}
                leftHand="Inefficient"
                rightHand="Efficient"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.efficiency.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Efficiency question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_EFFICIENCY} className="rw-field-error" />
            </Box>
            <Box>
              <LikertScaleQuestionField
                name={UEQ_CLARITY}
                leftHand="Confusing"
                rightHand="Clear"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.clarity.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Clarity question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_CLARITY} className="rw-field-error" />
            </Box>
            <Box>
              <LikertScaleQuestionField
                name={UEQ_MOTIVATION}
                leftHand="Boring"
                rightHand="Exciting"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.motivation.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Motivation question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_MOTIVATION} className="rw-field-error" />
            </Box>
            <Box>
              <LikertScaleQuestionField
                name={UEQ_INTEREST}
                leftHand="Not interesting"
                rightHand="Interesting"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.interest.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Interest question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_INTEREST} className="rw-field-error" />
            </Box>
            <Box>
              <LikertScaleQuestionField
                name={UEQ_NORM}
                leftHand="Conventional"
                rightHand="Inventive"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.norm.toString() || ''}
                validation={{
                  required: {
                    value: true,
                    message: 'Norm question is required',
                  },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_NORM} className="rw-field-error" />
            </Box>
            <Box>
              <LikertScaleQuestionField
                name={UEQ_ORIGINALITY}
                leftHand="Usual"
                rightHand="Leading edge"
                direction="row"
                n={7}
                value={ueqSurvey?.ueq?.originality.toString() || ''}
                validation={{
                  required: { value: true, message: 'Originality is required' },
                }}
                errorClassName="rw-input rw-input-error"
              />
              <FieldError name={UEQ_ORIGINALITY} className="rw-field-error" />
            </Box>
          </Flex>
        </Stack>
        <Stack alignItems="end">
          <SubmitButtons
            isLoading={
              loadingSurveyCreate ||
              loadingSurveyUpdate ||
              loadingUEQCreate ||
              loadingUEQUpdate
            }
            name="Next"
          />
        </Stack>
      </Flex>
    </Form>
  )
}
