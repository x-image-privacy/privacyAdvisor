import { Flex, Image } from '@chakra-ui/react'
import Wordcloud from '@x-image-privacy/wordcloud'
import type { FindWordImageByImageNumber } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { defaultWords1 } from './../../../public/word-data/word-cloud-data'

export const QUERY = gql`
  query FindWordImageByImageNumber($imageNumber: Int!) {
    image: imageByImageNumber(imageNumber: $imageNumber) {
      id
      imageLocation
      dataLocation
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  image,
}: CellSuccessProps<FindWordImageByImageNumber>) => {
  return (
    <Flex alignItems="center" gap={2}>
      <Image src={image.imageLocation} />
      <Wordcloud data={defaultWords1} />
    </Flex>
  )
}
