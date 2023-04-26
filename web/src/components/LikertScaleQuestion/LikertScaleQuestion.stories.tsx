// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof IsImagePrivateQuestion> = (args) => {
//   return <IsImagePrivateQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import LikertScaleQuestion from './LikertScaleQuestion'

export const generated = () => {
  return (
    <LikertScaleQuestion
      n={5}
      question="Is this image private?"
      leftHand="No"
      rightHand="Yes"
    />
  )
}

export default {
  title: 'Components/LikertScaleQuestion',
  component: LikertScaleQuestion,
} as ComponentMeta<typeof LikertScaleQuestion>

const Template: ComponentStory<typeof LikertScaleQuestion> = (args) => (
  <LikertScaleQuestion {...args} />
)

// export const FivePoint = Template.bind({})
// FivePoint.args = {
//   n: 5,
//   question: 'Is this image private?',
//   leftHand: 'No',
//   rightHand: 'Yes',
// }

type Story = StoryObj<typeof LikertScaleQuestion>
export const Primary: Story = {
  args: {
    n: 5,
    question: 'Is this image private?',
    leftHand: 'No',
    rightHand: 'Yes',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const radio1 = canvas.getByTestId('radio1')
  },
}

// FivePoint.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement)

// const radio1 = canvas.getByTestId('radio1')

// await userEvent.click(radio1)
// }
