import { Box, Image } from '@chakra-ui/react'
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
    <Box p={2} display={{ lg: 'flex' }}>
      <Box flexShrink={0}>
        <Image src={image.imageLocation} width={{ md: '100%' }} />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 4 }}>
        <Wordcloud data={defaultWords1} />
      </Box>
    </Box>
  )
}
