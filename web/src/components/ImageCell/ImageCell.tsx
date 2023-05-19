import type { FindImageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Image, Text } from '@chakra-ui/react'

export const QUERY = gql`
  query FindImageQuery($id: Int!) {
    image: image(id: $id) {
      id
      imageLocation
      dataLocation
      
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
  <ImageComponent image={image}/>

}

const ImageComponent = ({ image }) => {
  const location = image.imageLocation
    return (
      <>
      <Text>Current image: {image.id}</Text>
      <Image src={location}/>
      </>
    )
}
 
