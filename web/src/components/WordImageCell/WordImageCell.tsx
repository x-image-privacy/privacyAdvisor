import type {FindImageQuery} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Flex, Image, Text } from '@chakra-ui/react'
import Wordcloud from '@x-image-privacy/wordcloud'

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

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  image,
}: CellSuccessProps<FindImageQuery>) => {

  const location = image.imageLocation
  const data = image.dataLocation

  return ( 
    <Flex alignItems="center" gap={2}>
      <Text>Current image: {image.id}</Text>
      <Image src="/data/image1.jpg" />
      <Wordcloud
        data={[
          { id: 'word-1', text: ' Big word ', coef: 0.99 },
          { id: 'word-2', text: 'hello', coef: 0.8 },
          { id: 'word-4', text: 'caramba', coef: 0.97 },
          { id: 'word-3', text: 'all', coef: 0.74 },
          { id: 'word-5', text: 'Piniata', coef: 0.6 },
          { id: 'word-6', text: 'Taxi', coef: 0.93 },
          { id: 'word-7', text: 'papa', coef: 0.94 },
          { id: 'word-8', text: 'chicita', coef: 0.66 },
          { id: 'word-9', text: 'hellicopter', coef: 0.92 },
          { id: 'word-10', text: 'chiold', coef: 0.75 },
          { id: 'word-11', text: 'text', coef: 0.81 },
          { id: 'word-12', text: 'document', coef: 0.77 },
          { id: 'word-13', text: 'text', coef: 0.89 },
          { id: 'word-14', text: 'finger', coef: 0.91 },
          { id: 'word-15', text: 'girl', coef: 0.88 },
        ]}
      />
    </Flex>)

}
