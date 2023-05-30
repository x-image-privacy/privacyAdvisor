import type { FindPlainImageByImageNumber } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Flex, Image } from '@chakra-ui/react'


export const QUERY = gql`
  query FindPlainImageByImageNumber($imageNumber: Int!) {
    image: imageByImageNumber(imageNumber: $imageNumber) {
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
}: CellSuccessProps<FindPlainImageByImageNumber>) => {
    return (
      <Flex alignItems="center" gap={2}>
        <Image src={image.imageLocation}/>
      </Flex>
    )
} 
