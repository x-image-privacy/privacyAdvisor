import { Button, Flex, Stack } from '@chakra-ui/react'
import {
  FindUserByIdEmail,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from 'types/graphql'
import { USER_EMAIL } from 'web/config/constants'

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'

import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

type PrizeProps = {
  id: number
}

export const QUERY = gql`
  query FindUserByIdEmail($id: Int!) {
    userPrize: user(id: $id) {
      id
      email
    }
  }
`
const UPDATE_USER = gql`
  mutation UpdateUserEmail($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
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

const PrizeComponent = ({ userPrize, id }: FindUserByIdEmail & PrizeProps) => {
  const [update] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UPDATE_USER
  )

  console.log(userPrize)

  const onSubmit: SubmitHandler<PrizeValues> = (data) => {
    update({
      variables: {
        id: id,
        input: {
          email: data[USER_EMAIL],
        },
      },
    })
  }

  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Flex flexDirection="column" gap={5}>
        <Stack direction="column" gap={4} alignItems="start">
          <OpenEndedQuestionField
            name={USER_EMAIL}
            placeholder="Answer here..."
            value={userPrize?.email || ''}
          />
        </Stack>
        <Stack alignItems="end" mb={2}>
          <Button type="submit">Submit</Button>
        </Stack>
      </Flex>
    </Form>
  )
}
