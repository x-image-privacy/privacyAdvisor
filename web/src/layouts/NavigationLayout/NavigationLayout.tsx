import { Box, Image, Heading, Flex, Spacer, Center } from '@chakra-ui/react'

import QMLogo from 'src/components/Logos/QMLogo'

const LOGO_HEIGHT = '60px'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <>
      <Box w="100%" p="2%" h="200px">
        <Flex minWidth="max-content" alignItems="center">
          <Box>
            <Image h={LOGO_HEIGHT} src="/data/CIS_logo.svg" />
          </Box>
          <Spacer />
          <Box h={LOGO_HEIGHT}>
            <QMLogo fill="#000000" />
          </Box>
        </Flex>
        <Center>
          <Heading as="h1" size="4xl">
            Privacy advisor
          </Heading>
        </Center>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default NavigationLayout
