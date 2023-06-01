import { Button, Flex, Stack } from '@chakra-ui/react'
import type { FindDemographicQueryByUser } from 'types/graphql'
import {
  DEMOGRAPHIC_AGE,
  DEMOGRAPHIC_EDUCATION,
  DEMOGRAPHIC_TECHNOLOGY,
  DEMOGRAPHIC_PRIVACY,
} from 'web/config/constants'

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'

type DemographicProps = {
  userId: number
  onFinished: () => void
}

export const QUERY = gql`
  query FindDemographicQueryByUser($userId: Int!) {
    demographic: demographicByUser(userId: $userId) {
      id
      user {
        id
      }
      age
      education
      technology
      privacy
    }
  }
`

const CREATE_DEMOGRAPHIC_SURVEY = gql`
  mutation CreateDemographic($input: CreateDemographicInput!) {
    createDemographic(input: $input) {
      id
      age
      education
      technology
      privacy
    }
  }
`

const UPDATE_DEMOGRAPHIC_SURVEY = gql`
  mutation UpdateDemographic($id: Int!, $input: UpdateDemographicInput!) {
    updateDemographic(id: $id, input: $input) {
      id
      userId
      age
      education
      technology
      privacy
    }
  }
`

const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      submittedAt
    }
  }
`

interface DemographicValues {
  [DEMOGRAPHIC_AGE]: string
  [DEMOGRAPHIC_EDUCATION]: string
  [DEMOGRAPHIC_TECHNOLOGY]: string
  [DEMOGRAPHIC_PRIVACY]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: DemographicProps) => (
  <DemographicComponent {...props} />
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindDemographicQueryByUser> & DemographicProps
) => <DemographicComponent {...props} />

const DemographicComponent = ({
  demographic,
  userId,
  onFinished,
}: FindDemographicQueryByUser & DemographicProps) => {
  const [create] = useMutation(CREATE_DEMOGRAPHIC_SURVEY)
  const [update] = useMutation(UPDATE_DEMOGRAPHIC_SURVEY)
  const [updateUser] = useMutation(UPDATE_USER)

  const onSubmit: SubmitHandler<DemographicValues> = (data) => {
    const ageRank = parseInt(data[DEMOGRAPHIC_AGE])
    const educationRank = parseInt(data[DEMOGRAPHIC_EDUCATION])
    const technologyRank = parseInt(data[DEMOGRAPHIC_TECHNOLOGY])
    const privacyRank = parseInt(data[DEMOGRAPHIC_PRIVACY])

    const date = new Date()
    const currentTime = date.toISOString() as unknown as Date

    if (demographic && demographic.user.id) {
      update({
        variables: {
          id: demographic.id,
          input: {
            age: ageRank,
            education: educationRank,
            technology: technologyRank,
            privacy: privacyRank,
          },
        },
      })
    } else {
      create({
        variables: {
          input: {
            userId,
            age: ageRank,
            education: educationRank,
            technology: technologyRank,
            privacy: privacyRank,
          },
        },
      })
    }

    updateUser({
      variables: {
        id: userId,
        input: {
          submittedAt: currentTime,
        },
      },
    })

    onFinished()
  }

  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Flex flexDirection="column" gap={12}>
        <Stack direction="column" gap={8} alignItems="start">
          <LikertScaleQuestionField
            name={DEMOGRAPHIC_AGE}
            n={6}
            question="What is your age?"
            text={[
              '0-15 years old',
              '15-30 years old',
              '30-45 years old',
              '45-60 years old',
              '60+',
              'Prefer not to say',
            ]}
            direction="column"
            value={demographic?.age.toString() || ''}
            validation={{ required: true }}
          />
          <LikertScaleQuestionField
            name={DEMOGRAPHIC_EDUCATION}
            n={6}
            question="What is the highest degree or level of education you have completed?"
            text={[
              'CFC/Apprenticeship',
              'Maturité/Baccalauréat',
              'Bachelors Degree',
              'Masters Degree',
              'Ph.D or higher',
              'Prefer not to say',
            ]}
            direction="column"
            value={demographic?.education.toString() || ''}
            validation={{ required: true }}
          />
          <LikertScaleQuestionField
            name={DEMOGRAPHIC_PRIVACY}
            n={4}
            question="What is your self-opinion about privacy?"
            text={[
              'I am not familiar with it',
              'I heard about it',
              'I am familiar with it',
              'Prefer not to say',
            ]}
            direction="column"
            value={demographic?.privacy.toString() || ''}
            validation={{ required: true }}
          />
          <LikertScaleQuestionField
            name={DEMOGRAPHIC_TECHNOLOGY}
            n={4}
            question="What is your self-assessed proficiency with technology?"
            text={[
              'I need the help of a technical person',
              'I manage it',
              'I am very comfortable',
              'Prefer not to say',
            ]}
            direction="column"
            value={demographic?.technology.toString() || ''}
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
