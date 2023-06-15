import { Box, Image } from '@chakra-ui/react'
import Wordcloud from '@x-image-privacy/wordcloud'
import type { FindWordImageByImageNumber } from 'types/graphql'
import { getTheWords } from 'web/public/word-data/word-cloud-data'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindWordImageByImageNumber($imageNumber: Int!) {
    image: imageByImageNumber(imageNumber: $imageNumber) {
      id
      imageLocation
      dataLocation
      imageNumber
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
    <Box p={2} display={{ xl: 'flex' }}>
      <Box flexShrink={0}>
        <Image src={image.imageLocation} width={{ md: '80%' }} />
      </Box>
      <Box mt={{ base: 4, md: 0 }} m={{ md: 2 }}>
        <Wordcloud data={getTheWords(image.imageNumber - 1)} />
      </Box>
    </Box>
  )
}
