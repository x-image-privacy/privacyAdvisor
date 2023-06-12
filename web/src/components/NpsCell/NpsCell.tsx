import { Box, Flex, Stack } from '@chakra-ui/react'
import type {
  CreateCustomerSatisfactionSurvey,
  CreateCustomerSatisfactionSurveyVariables,
  CreateNetPromoterScore,
  CreateNetPromoterScoreVariables,
  FindNpsSurveyByUserId,
  UpdateCustomerSatisfactionSurvey,
  UpdateCustomerSatisfactionSurveyVariables,
  UpdateNetPromoterScore,
  UpdateNetPromoterScoreVariables,
} from 'types/graphql'
import { NPS_OPEN_QUESTION, NPS_RANK_QUESTION } from 'web/config/constants'

import { FieldError, Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'
import SubmitButtons from '../SubmitButtons'

type NpsProps = {
  userId: number
  onFinished: () => void
}

export const QUERY = gql`
  query FindNpsSurveyByUserId($userId: Int!) {
    npsSurvey: customerSatisfactionSurveyByUser(userId: $userId) {
      id
      user {
        id
      }
      nps {
        id
        rank
        justification
      }
    }
  }
`

const CREATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation CreateCustomerSatisfactionSurveyNps(
    $input: CreateCustomerSatisfactionSurveyInput!
  ) {
    createCustomerSatisfactionSurvey(input: $input) {
      id
      nps {
        id
        rank
        justification
      }
    }
  }
`

const UPDATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation UpdateCustomerSatisfactionSurveyNps(
    $id: Int!
    $input: UpdateCustomerSatisfactionSurveyInput!
  ) {
    updateCustomerSatisfactionSurvey(id: $id, input: $input) {
      id
      userId
      nps {
        id
        rank
        justification
      }
    }
  }
`

const CREATE_NPS_SCORE = gql`
  mutation CreateNetPromoterScore($input: CreateNetPromoterScoreInput!) {
    createNetPromoterScore(input: $input) {
      id
      rank
      justification
    }
  }
`

const UPDATE_NPS_SCORE = gql`
  mutation UpdateNetPromoterScore(
    $id: Int!
    $input: UpdateNetPromoterScoreInput!
  ) {
    updateNetPromoterScore(id: $id, input: $input) {
      id
      rank
      justification
    }
  }
`

interface NpsValues {
  [NPS_RANK_QUESTION]: string
  [NPS_OPEN_QUESTION]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: NpsProps) => <NpsSurveyComponent {...props} />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindNpsSurveyByUserId> & NpsProps
) => <NpsSurveyComponent {...props} />

const NpsSurveyComponent = ({
  npsSurvey,
  userId,
  onFinished,
}: FindNpsSurveyByUserId & NpsProps) => {
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

  const [createNps, { loading: loadingNPSCreate, error: errorNPSCreate }] =
    useMutation<CreateNetPromoterScore, CreateNetPromoterScoreVariables>(
      CREATE_NPS_SCORE,
      {
        onError: () => {
          toast.error('Create NPS fail')
        },
      }
    )

  const [updateNps, { loading: loadingNPSUpdate, error: errorNPSUpdate }] =
    useMutation<UpdateNetPromoterScore, UpdateNetPromoterScoreVariables>(
      UPDATE_NPS_SCORE,
      {
        onError: () => {
          toast.error('Update NPS fail')
        },
      }
    )

  const onSubmit: SubmitHandler<NpsValues> = async (data) => {
    const npsRank = parseInt(data[NPS_RANK_QUESTION])

    if (npsSurvey && npsSurvey.user.id) {
      if (npsSurvey.nps?.id) {
        await updateNps({
          variables: {
            id: npsSurvey.nps.id,
            input: {
              rank: npsRank,
              justification: data[NPS_OPEN_QUESTION],
            },
          },
        })
      } else {
        const newNps = await createNps({
          variables: {
            input: {
              rank: npsRank,
              justification: data[NPS_OPEN_QUESTION],
            },
          },
        })

        await updateCustomerSurvey({
          variables: {
            id: npsSurvey.id,
            input: {
              npsId: newNps.data?.createNetPromoterScore.id,
            },
          },
        })
      }
    } else {
      const newNps = await createNps({
        variables: {
          input: {
            rank: npsRank,
            justification: data[NPS_OPEN_QUESTION],
          },
        },
      })

      await createCustomerSurvey({
        variables: {
          input: {
            userId,
            npsId: newNps.data?.createNetPromoterScore.id,
          },
        },
      })
    }

    if (
      !errorNPSCreate &&
      !errorNPSUpdate &&
      !errorSurveyCreate &&
      !errorSurveyUpdate
    ) {
      onFinished()
    }
  }

  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Flex flexDirection="column" gap={12}>
        <Stack direction="column" gap={8} alignItems="start">
          <Box>
            <LikertScaleQuestionField
              name={NPS_RANK_QUESTION}
              n={11}
              question="How likely are you to recommend this interface to a friend?"
              text={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
              direction="row"
              value={npsSurvey?.nps?.rank.toString() || ''}
              validation={{
                required: {
                  value: true,
                  message: 'Recommend question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError name={NPS_RANK_QUESTION} className="rw-field-error" />
          </Box>
          <Box>
            <OpenEndedQuestionField
              question="Tell us a bit more about why you chose this rating"
              name={NPS_OPEN_QUESTION}
              placeholder="Answer here..."
              value={npsSurvey?.nps?.justification || ''}
              validation={{
                required: {
                  value: true,
                  message: 'Rating question is required',
                },
              }}
              errorClassName="rw-input rw-input-error"
            />
            <FieldError name={NPS_OPEN_QUESTION} className="rw-field-error" />
          </Box>
        </Stack>
        <Stack alignItems="end">
          <SubmitButtons
            isLoading={
              loadingNPSCreate ||
              loadingNPSUpdate ||
              loadingSurveyCreate ||
              loadingSurveyUpdate
            }
            name="Next"
          />
        </Stack>
      </Flex>
    </Form>
  )
}
