import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Head } from '@redwoodjs/web'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <>
      <Box w="100%" p="2%" ml="40%">
        <Heading as="h1" size="4xl">
          Privacy advisor
        </Heading>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default NavigationLayout
