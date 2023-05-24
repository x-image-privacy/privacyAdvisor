import { Button } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const ParticipateButton = () => {
  return (
    <Button as={Link} to={routes.signup()} colorScheme="blue">
      Participate !
    </Button>
  )
}

export default ParticipateButton
