import type { ComponentStory } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './CsatCell'
import { standard } from './CsatCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? (
    <Empty
      userId={0}
      onFinished={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  ) : (
    <></>
  )
}

export const failure: ComponentStory<typeof Failure> = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const success: ComponentStory<typeof Success> = (args) => {
  return Success ? <Success {...standard()} {...args} /> : <></>
}

export default { title: 'Cells/CsatCell' }
