// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof JustifyQuestion> = (args) => {
//   return <JustifyQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import JustifyQuestion from './JustifyQuestion'

export const generated = () => {
  return <JustifyQuestion />
}

export default {
  title: 'Components/JustifyQuestion',
  component: JustifyQuestion,
} as ComponentMeta<typeof JustifyQuestion>
