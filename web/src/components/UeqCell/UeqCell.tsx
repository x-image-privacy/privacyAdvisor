import { CreateCustomerSatisfactionScoreVariables, CreateUserExperienceQuestionaireScore, FindUeqSurveyByUserId } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import {UEQ_QUESTION_1, UEQ_QUESTION_2, UEQ_QUESTION_3, UEQ_QUESTION_4,
  UEQ_QUESTION_5, UEQ_QUESTION_6, UEQ_QUESTION_7, UEQ_QUESTION_8} from 'web/config/constants'
import { SubmitHandler } from '@redwoodjs/forms'

type UeqProps = {
  userId: number
  onFinished: () => void
}

export const QUERY = gql`
  query FindUeqSurveyByUserId($userId: Int!) {
    ueqSurvey: customerSatisfactionSurveyByUser(userId: $userId)  {
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
  mutation CreateCustomerSatisfactionSurveyUeq($input: CreateCustomerSatisfactionSurveyInput!) {
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
  }`

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
  mutation CreateUserExperienceQuestionaireScore($input: CreateUserExperienceQuestionaireScoreInput!) {
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
  UEQ_QUESTION_1: string
  UEQ_QUESTION_2: string
  UEQ_QUESTION_3: string
  UEQ_QUESTION_4: string
  UEQ_QUESTION_5: string
  UEQ_QUESTION_6: string
  UEQ_QUESTION_7: string
  UEQ_QUESTION_8: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: UeqProps) => <UeqSurveyComponent {...props}/>

export const Failure = ({ error }: CellFailureProps<FindUeqSurveyByUserId>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindUeqSurveyByUserId>) => <UeqSurveyComponent {...props}/>


const UeqSurveyComponent = ({ueqSurvey, userId, onFinished,}: FindUeqSurveyByUserId & UeqProps) => {
  const [createCustomerSurvey] = useMutation(CREATE_CUSTOMER_SATISFACTION_SURVEY)
  const [updateCustomerSurvey] = useMutation(UPDATE_CUSTOMER_SATISFACTION_SURVEY)

  const [createUeq] = useMutation<CreateUserExperienceQuestionaireScore, CreateCustomerSatisfactionScoreVariables>(CREATE_UEQ_SCORE)
  const [updateUeq] = useMutation(UPDATE_UEQ_SCORE)

  const onSubmit: SubmitHandler<UeqValues> = async (data) => {
    const supportRank = parseInt(data[UEQ_QUESTION_1])
    const complexityRank = parseInt(data[UEQ_QUESTION_2])
    const efficiencyRank = parseInt(data[UEQ_QUESTION_3])
    const clarityRank = parseInt(data[UEQ_QUESTION_4])
    const motivationRank = parseInt(data[UEQ_QUESTION_5])
    const interestRank = parseInt(data[UEQ_QUESTION_6])
    const normRank = parseInt(data[UEQ_QUESTION_7])
    const originalityRank = parseInt(data[UEQ_QUESTION_8])

    if (ueqSurvey && ueqSurvey.id) {
      if (ueqSurvey.ueq.id) {
        updateUeq({
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
          }
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
          }
        })

        updateCustomerSurvey({
          variables: {
            id: ueqSurvey.id,
            input: {
              ueqId: newUeq.data?.createUserExperienceQuestionaireScore.id
            }
          }
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
          }
        }
      })

      createCustomerSurvey({
        variables: {
          input: {
            userId,
            ueqId: newUeq.data?.createUserExperienceQuestionaireScore.id
          }
        }
      })
    }

    onFinished()

  }
  return()
  
}