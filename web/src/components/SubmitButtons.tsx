import { Button, ButtonGroup } from '@chakra-ui/react'

import { useFormState } from '@redwoodjs/forms'
type Props = {
  isLoading: boolean
  onPrevious: () => void
}
const SubmitButtons = ({ onPrevious, isLoading }: Props) => {
  const formState = useFormState()
  return (
    <ButtonGroup spacing={4}>
      <Button onClick={onPrevious}>Previous</Button>
      <Button type="submit" disabled={!formState.isValid} isLoading={isLoading}>
        Next
      </Button>
    </ButtonGroup>
  )
}
export default SubmitButtons
