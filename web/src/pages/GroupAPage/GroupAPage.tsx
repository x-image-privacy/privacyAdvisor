import { Box } from '@chakra-ui/react'
import LikertScaleQuestion from 'src/components/LikertScaleQuestion/LikertScaleQuestion'

const GroupAPage = () => {
  return (
    <>
      <Box w="300px" p="2%">
        <LikertScaleQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
      </Box>
    </>
  )
}

export default GroupAPage
