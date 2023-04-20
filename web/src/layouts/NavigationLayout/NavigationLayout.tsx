import { Box, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <>
      <Box w="100%" p="2%" h="200px">
        <Box ml="2%" w="20%">
          <Image src="../../data/CIS_logo_transparentBG_black_small.png" />
        </Box>
        <Box>
          <Heading as="h1" size="4xl" ml="40%" w="80%">
            Privacy advisor
          </Heading>
        </Box>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default NavigationLayout
