import { Button, Flex, Stack } from '@chakra-ui/react'
import type {
  CreateCustomerSatisfactionScore,
  CreateCustomerSatisfactionScoreVariables,
  FindCsatSurveyByUserId,
} from 'types/graphql'
import { CSAT_OPEN_QUESTION, CSAT_RANK_QUESTION } from 'web/config/constants'

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

type CsatProps = {
  userId: number
  onFinished: () => void
}

export const QUERY = gql`
  query FindCsatSurveyByUserId($userId: Int!) {
    csatSurvey: customerSatisfactionSurveyByUser(userId: $userId) {
      id
      user {
        id
      }
      csat {
        id
        rank
        justification
      }
    }
  }
`
const CREATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation CreateCustomerSatisfactionSurvey(
    $input: CreateCustomerSatisfactionSurveyInput!
  ) {
    createCustomerSatisfactionSurvey(input: $input) {
      id
      csat {
        id
        rank
        justification
      }
    }
  }
`

const UPDATE_CUSTOMER_SATISFACTION_SURVEY = gql`
  mutation UpdateCustomerSatisfactionSurvey(
    $id: Int!
    $input: UpdateCustomerSatisfactionSurveyInput!
  ) {
    updateCustomerSatisfactionSurvey(id: $id, input: $input) {
      id
      userId
      csat {
        id
        rank
        justification
      }
    }
  }
`

const CREATE_CUSTOMER_SATISFACTION_SCORE = gql`
  mutation CreateCustomerSatisfactionScore(
    $input: CreateCustomerSatisfactionScoreInput!
  ) {
    createCustomerSatisfactionScore(input: $input) {
      id
      rank
      justification
    }
  }
`

const UPDATE_CUSTOMER_SATISFACTION_SCORE = gql`
  mutation UpdateCustomerSatisfactionScore(
    $id: Int!
    $input: UpdateCustomerSatisfactionScoreInput!
  ) {
    updateCustomerSatisfactionScore(id: $id, input: $input) {
      id
      rank
      justification
    }
  }
`

interface CsatValues {
  [CSAT_RANK_QUESTION]: string
  [CSAT_OPEN_QUESTION]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: CsatProps) => <CsatSurveyComponent {...props} />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindCsatSurveyByUserId> & CsatProps
) => <CsatSurveyComponent {...props} />

const CsatSurveyComponent = ({
  csatSurvey,
  userId,
  onFinished,
}: FindCsatSurveyByUserId & CsatProps) => {
  const [createCustomerSurvey] = useMutation(
    CREATE_CUSTOMER_SATISFACTION_SURVEY
  )
  const [updateCustomerSurvey] = useMutation(
    UPDATE_CUSTOMER_SATISFACTION_SURVEY
  )

  const [createCsat, { error }] = useMutation<
    CreateCustomerSatisfactionScore,
    CreateCustomerSatisfactionScoreVariables
  >(CREATE_CUSTOMER_SATISFACTION_SCORE, {
    onError: () => {
      toast.error('fail')
    },
  })
  const [updateCsat] = useMutation(UPDATE_CUSTOMER_SATISFACTION_SCORE)

  const onSubmit: SubmitHandler<CsatValues> = async (data) => {
    const csatRank = parseInt(data[CSAT_RANK_QUESTION])

    if (csatSurvey && csatSurvey.id) {
      if (csatSurvey.csat?.id) {
        await updateCsat({
          variables: {
            id: csatSurvey.csat.id,
            input: {
              rank: csatRank,
              justification: data[CSAT_OPEN_QUESTION],
            },
          },
        })
      } else {
        const newCsat = await createCsat({
          variables: {
            input: {
              rank: csatRank,
              justification: data[CSAT_OPEN_QUESTION],
            },
          },
        })

        await updateCustomerSurvey({
          variables: {
            id: csatSurvey.id,
            input: {
              csatId: newCsat.data?.createCustomerSatisfactionScore.id,
            },
          },
        })
      }
    } else {
      const newCsat = await createCsat({
        variables: {
          input: {
            rank: csatRank,
            justification: data[CSAT_OPEN_QUESTION],
          },
        },
      })

      await createCustomerSurvey({
        variables: {
          input: {
            userId,
            csatId: newCsat.data?.createCustomerSatisfactionScore.id,
          },
        },
      })
    }

    if (!error) {
      onFinished()
    }
  }

  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Flex flexDirection="column" gap={12}>
        <Stack direction="column" gap={8} alignItems="start">
          <LikertScaleQuestionField
            name={CSAT_RANK_QUESTION}
            n={5}
            question="How satisfied are you with the interface?"
            text={[
              'Very satisfied',
              'Satisfied',
              'Neutral',
              'Dissatisfied',
              'Very dissatisfied',
            ]}
            direction="column"
            value={csatSurvey?.csat?.rank.toString() || ''}
            validation={{ required: true }}
          />
          <OpenEndedQuestionField
            question="What is the biggest value you get from using this interface?"
            name={CSAT_OPEN_QUESTION}
            placeholder="Justify here..."
            value={csatSurvey?.csat?.justification || ''}
            validation={{ required: true }}
          />
        </Stack>
        <Stack alignItems="end" mb={5}>
          <Button type="submit">Next</Button>
        </Stack>
      </Flex>
    </Form>
  )
}
