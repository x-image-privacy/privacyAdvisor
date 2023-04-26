// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof OpenEndedQuestion> = (args) => {
//   return <OpenEndedQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import OpenEndedQuestion from './OpenEndedQuestion'

export const generated = () => {
  return <OpenEndedQuestion />
}

export default {
  title: 'Components/OpenEndedQuestion',
  component: OpenEndedQuestion,
} as ComponentMeta<typeof OpenEndedQuestion>
