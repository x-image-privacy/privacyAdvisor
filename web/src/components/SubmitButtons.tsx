import { Button, ButtonGroup } from '@chakra-ui/react'

import { useFormState } from '@redwoodjs/forms'
type Props = {
  onPrevious: () => void
}
const SubmitButtons = ({ onPrevious }: Props) => {
  const formState = useFormState()
  return (
    <ButtonGroup spacing={4}>
      <Button onClick={onPrevious}>Previous</Button>
      <Button type="submit" disabled={!formState.isValid}>
        Next
      </Button>
    </ButtonGroup>
  )
}
export default SubmitButtons
