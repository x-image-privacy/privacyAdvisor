import { Flex, Stack } from '@chakra-ui/react'
import {
  FindUserByIdEmail,
  UpdateUserMutationVariables,
  UpdateUserMutation,
} from 'types/graphql'
import { USER_EMAIL } from 'web/config/constants'

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'
import SubmitButtons from '../SubmitButtons'

type PrizeProps = {
  id: number
}

export const QUERY = gql`
  query FindUserByIdEmail($id: Int!) {
    userPrize: user(id: $id) {
      id
      email
      milestone
    }
  }
`
const UPDATE_USER = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
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
  const [update, { loading: loadingCreate }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UPDATE_USER, {
    onError: () => {
      toast.error('Email user fail')
    },
  })

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
        {userPrize?.email == null && (
          <>
            <Stack direction="column" gap={4} alignItems="start">
              <OpenEndedQuestionField
                name={USER_EMAIL}
                placeholder="Answer here..."
                value={userPrize?.email || ''}
              />
            </Stack>
            <Stack alignItems="end" mb={2}>
              <SubmitButtons isLoading={loadingCreate} name="Submit" />
            </Stack>
          </>
        )}
      </Flex>
    </Form>
  )
}
