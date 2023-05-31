import { Button } from '@chakra-ui/react'
import { FindUserByIdEmail } from 'types/graphql'
import { USER_EMAIL } from 'web/config/constants'

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'

import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

type PrizeProps = {
  userId: number
}

export const Query = gql`
  query FindUserByIdEmail($id: Int!) {
    userPrize: user(id: $id) {
      email
    }
  }
`
const UPDATE_USER = gql`
  mutation UpdateUserEmail($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      email
    }
  }
`

interface PrizeValues {
  [USER_EMAIL]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: PrizeProps) => <PrizeComponent {...props} />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindUserByIdEmail> & PrizeProps
) => <PrizeComponent {...props} />

const PrizeComponent = ({
  userPrize,
  userId,
}: FindUserByIdEmail & PrizeProps) => {
  const [update] = useMutation(UPDATE_USER)

  const onSubmit: SubmitHandler<PrizeValues> = (data) => {
    if (!userPrize) {
      update({
        variables: {
          id: userId,
          input: {
            email: data[USER_EMAIL],
          },
        },
      })
    }
  }

  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <OpenEndedQuestionField
        question="Enter your email"
        name={USER_EMAIL}
        placeholder="Answer here..."
        value={userPrize?.email || ''}
        validation={{ required: true }}
      />

      <Button type="submit">Next</Button>
    </Form>
  )
}
