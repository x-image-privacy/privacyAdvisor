import {
  Box,
  Image,
  Heading,
  Flex,
  Spacer,
  Center,
  Text,
  IconButton,
} from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'

import { useAuth } from 'src/auth'
import QMLogo from 'src/components/Logos/QMLogo'
import ParticipateButton from 'src/components/ParticipateButton/ParticipateButton'

const LOGO_HEIGHT = '50px'

type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  const { currentUser, logOut } = useAuth()
  return (
    <>
      <Box w="100%" p={2}>
        <Flex justifyContent="flex-end" alignItems="center" gap={2}>
          {currentUser ? (
            <>
              <Text>{currentUser?.username}</Text>
              <IconButton
                aria-label="Logout"
                icon={<FiLogOut />}
                onClick={logOut}
              />
            </>
          ) : (
            <ParticipateButton />
          )}
        </Flex>
        <Flex alignItems="center" maxWidth="100%">
          <Box>
            <Image h={[10, LOGO_HEIGHT]} src="/data/CIS_logo.svg" />
          </Box>
          <Spacer />
          <Box h={[10, LOGO_HEIGHT]}>
            <QMLogo fill="#000000" />
          </Box>
        </Flex>
        <Center>
          <Heading as="h1" fontSize={{ base: '24px', sm: '50px' }}>
            Privacy advisor
          </Heading>
        </Center>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default NavigationLayout
