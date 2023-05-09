// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UeqQuestion> = (args) => {
//   return <UeqQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'
import UeqQuestion, { UEQQuestionProps } from './UEQQuestion'

export const generated = () => {
  return (
    <UeqQuestion
      onChange={function (nextValue: string): void {
        throw new Error('Function not implemented.')
      }}
      leftHand="left"
      rightHand="right"
      value=""
    />
  )
}

export default {
  title: 'Components/UeqQuestion',
  component: UeqQuestion,
} as ComponentMeta<typeof UeqQuestion>

const Template = (args: JSX.IntrinsicAttributes & UEQQuestionProps) => (
  <UeqQuestion {...args} />
)

export const ueqQuestion = Template.bind({})
