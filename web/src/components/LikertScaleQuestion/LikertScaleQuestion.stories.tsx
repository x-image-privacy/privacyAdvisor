import LikertScaleQuestion from './LikertScaleQuestion'
import type { ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Components/LikertScaleQuestion',
  component: LikertScaleQuestion,
} as ComponentMeta<typeof LikertScaleQuestion>

export const generated = () => {
  return (
    <LikertScaleQuestion
      n={5}
      question={'Question'}
      leftHand={'Yes'}
      rightHand={'No'}
      onChange={function (nextValue: string): void {
        throw new Error('Function not implemented.')
      }}
      value={''}
    />
  )
}
