import React from 'react'
import LikertScaleQuestion from './LikertScaleQuestion'
import { within, userEvent } from '@storybook/testing-library'
import type { ComponentMeta } from '@storybook/react'

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

const Template = (args) => <LikertScaleQuestion {...args} />

export const NPointQuestion = Template.bind({})

export const DisplayQuestion = Template.bind({})

DisplayQuestion.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const radio1 = await canvas.getByTestId('radio1')
  await userEvent.click(radio1)
}
