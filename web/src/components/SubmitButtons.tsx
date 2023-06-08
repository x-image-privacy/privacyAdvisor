import { Button, ButtonGroup } from '@chakra-ui/react'

import { useFormState } from '@redwoodjs/forms'
type Props = {
  isLoading: boolean
  onPrevious?: () => void
  name: string
}
const SubmitButtons = ({ onPrevious, isLoading, name }: Props) => {
  const formState = useFormState()
  return (
    <ButtonGroup spacing={4}>
      {onPrevious && <Button onClick={onPrevious}>Previous</Button>}
      <Button type="submit" disabled={!formState.isValid} isLoading={isLoading}>
        {name}
      </Button>
    </ButtonGroup>
  )
}
export default SubmitButtons
