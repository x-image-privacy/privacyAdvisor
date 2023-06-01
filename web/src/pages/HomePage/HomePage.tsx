import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'
import {
  MILESTONE_END,
  MILESTONE_GROUP_A,
  MILESTONE_GROUP_B,
  MILESTONE_SURVEY,
  PAGE_END,
  PAGE_GROUP_A,
  PAGE_GROUP_B,
  PAGE_SURVEY,
} from 'web/config/constants'

import { Link, navigate, routes } from '@redwoodjs/router'
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
    },
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
          <Text>This survey takes about 15 minutes.</Text>
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

export const IsMilestone = (page: string, milestone: string) => {
  if (page == PAGE_GROUP_A) {
    console.log(milestone)
    switch (milestone) {
      case MILESTONE_GROUP_A:
        break
      case MILESTONE_GROUP_B:
        navigate(routes.groupB(), { replace: true })
        break
      case MILESTONE_SURVEY:
        navigate(routes.customerSatisfaction(), { replace: true })
        break
      case MILESTONE_END:
        navigate(routes.endSurvey(), { replace: true })
        break
      default:
        break
    }
  } else if (page == PAGE_GROUP_B) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        navigate(routes.groupA(), { replace: true })
        break
      case MILESTONE_GROUP_B:
        break
      case MILESTONE_SURVEY:
        navigate(routes.customerSatisfaction(), { replace: true })
        break
      case MILESTONE_END:
        navigate(routes.endSurvey(), { replace: true })
        break
      default:
        break
    }
  } else if (page == PAGE_SURVEY) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        navigate(routes.groupA(), { replace: true })
        break
      case MILESTONE_GROUP_B:
        navigate(routes.groupB(), { replace: true })
        break
      case MILESTONE_SURVEY:
        break
      case MILESTONE_END:
        navigate(routes.endSurvey(), { replace: true })
        break
      default:
        break
    }
  } else if (page == PAGE_END) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        navigate(routes.groupA(), { replace: true })
        break
      case MILESTONE_GROUP_B:
        navigate(routes.groupB(), { replace: true })
        break
      case MILESTONE_SURVEY:
        navigate(routes.customerSatisfaction(), { replace: true })
        break
      case MILESTONE_END:
        break
      default:
        break
    }
  } else {
    navigate(routes.home(), { replace: true })
  }
}

export default HomePage
