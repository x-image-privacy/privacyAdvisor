import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ParticipateButton from 'src/components/ParticipateButton/ParticipateButton'

const HomePage = () => {
  const devRoutes = [
    {
      label: 'Home',
      link: routes.home(),
    },
    {
      label: 'Group A',
      link: routes.groupA(),
    },
    {
      label: 'Group B',
      link: routes.groupB(),
    },
    {
      label: 'Customer satisfaction',
      link: routes.customerSatisfaction(),
    },
    {
      label: 'End survey',
      link: routes.endSurvey(),
    }
  ]
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        <Center flexDirection="column" gap={4}>
          <Heading>Welcome to this study !</Heading>
          <Text>
            Thank you for taking the time to participate in this study
          </Text>
          <ParticipateButton />
          {process.env.NODE_ENV === 'development' && (
            <>
              <Spacer />
              <Flex gap={2}>
                {devRoutes.map((r) => (
                  <Button key={r.label}>
                    <Link to={r.link}>{r.label}</Link>
                  </Button>
                ))}
              </Flex>
            </>
          )}
        </Center>
      </Container>
    </>
  )
}

export default HomePage
