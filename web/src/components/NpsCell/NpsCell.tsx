import type { CreateNetPromoterScore, CreateNetPromoterScoreVariables, FindNpsSurveyByUserId } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import { Form, SubmitHandler } from '@redwoodjs/forms'

import { NPS_OPEN_QUESTION, NPS_RANK_QUESTION } from 'web/config/constants'
import { Button, Stack } from '@chakra-ui/react'
import { toast } from '@redwoodjs/web/toast'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

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
  mutation CreateCustomerSatisfactionSurveyNps($input: CreateCustomerSatisfactionSurveyInput!) {
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

export const Empty = (props: NpsProps) => <NpsSurveyComponent {...props}/>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (props: CellSuccessProps<FindNpsSurveyByUserId> & NpsProps ) => <NpsSurveyComponent {...props}/>

const NpsSurveyComponent = ({
  npsSurvey,
  userId, 
  onFinished, 
}: FindNpsSurveyByUserId & NpsProps) => {
  const [createCustomerSurvey, {loading, error}] = useMutation(CREATE_CUSTOMER_SATISFACTION_SURVEY, {
    onError: (data) => {
      toast.error('fail')
    }
  })
  const [updateCustomerSurvey] = useMutation(UPDATE_CUSTOMER_SATISFACTION_SURVEY)

  const [createNps] = useMutation<CreateNetPromoterScore, CreateNetPromoterScoreVariables>(CREATE_NPS_SCORE)
  const [updateNps] = useMutation(CREATE_NPS_SCORE)

  const onSubmit: SubmitHandler<NpsValues> = async (data) => {
    console.log(npsSurvey)
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
          }
        })
      } else {
        const newNps = await createNps({
          variables: {
            input: {
              rank: npsRank,
              justification: data[NPS_OPEN_QUESTION],
            }
          }
        })

        await updateCustomerSurvey({
          variables: {
            id: npsSurvey.id,
            input: {
              npsId: newNps.data?.createNetPromoterScore.id
            }
          }
        })
      }
    } else {
      const newNps = await createNps({
        variables: {
          input: {
            rank: npsRank,
            justification: data[NPS_OPEN_QUESTION],
          }
        }
      })

      await createCustomerSurvey({
        variables: {
          input: {
            userId,
            npsId: newNps.data?.createNetPromoterScore.id
          }
        }
      })
    }

    
    if (!error) {
      onFinished()
    }
  }

  return(
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Stack direction="column" gap={8} alignItems="start">
        <LikertScaleQuestionField
          name={NPS_RANK_QUESTION}
          n={11}
          question="How likely are you to recommend this interface to a friend?"
          text={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          direction="row"
          value={npsSurvey?.nps?.rank.toString() || ''}
          validation={{ required: true }}     
        />
        <OpenEndedQuestionField
          question="Tell us a bit more about why you chosee this rating"
          name={NPS_OPEN_QUESTION}
          placeholder="Answer here..." 
          value={npsSurvey?.nps?.justification || ''}       
          validation={{ required: true }}     
        />
        <Button type="submit">Next</Button>
      </Stack>
    </Form>

  )
}

