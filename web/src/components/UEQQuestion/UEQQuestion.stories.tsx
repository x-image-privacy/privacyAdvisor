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

import UeqQuestion from './UeqQuestion'

export const generated = () => {
  return <UeqQuestion />
}

export default {
  title: 'Components/UeqQuestion',
  component: UeqQuestion,
} as ComponentMeta<typeof UeqQuestion>
