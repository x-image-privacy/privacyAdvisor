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

import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { within } from '@storybook/testing-library'

import IsImagePrivateQuestion from './LikertScaleQuestion'

export const generated = () => {
  return (
    <IsImagePrivateQuestion
      n={5}
      question="Is this image private?"
      leftHand="No"
      rightHand="Yes"
    />
  )
}

export default {
  title: 'Components/IsImagePrivateQuestion',
  component: IsImagePrivateQuestion,
} as ComponentMeta<typeof IsImagePrivateQuestion>

const Template: ComponentStory<typeof IsImagePrivateQuestion> = (args) => (
  <IsImagePrivateQuestion {...args} />
)

export const FivePoint = Template.bind({})
FivePoint.args = {
  n: 5,
  question: 'Is this image private?',
  leftHand: 'No',
  rightHand: 'Yes',
}

FivePoint.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
}
