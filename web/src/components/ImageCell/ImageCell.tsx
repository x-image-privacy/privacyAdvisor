import type { FindImageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Flex, Image, Text } from '@chakra-ui/react'

export const QUERY = gql`
  query FindImageQuery($id: Int!) {
    image: image(id: $id) {
      id
      imageLocation
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty...</div>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  image,
}: CellSuccessProps<FindImageQuery>) => {
  const location = image.imageLocation

    return (
      <Flex alignItems="center" gap={2}>
        <Text>Current image: {image.id}</Text>
        <Image src="/data/image1.jpg"/>
      </Flex>
    )
} 
