// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ScaleOpenEndedQuestion> = (args) => {
//   return <ScaleOpenEndedQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ScaleOpenEndedQuestion from './ScaleOpenEndedQuestion'

export const generated = () => {
  return <ScaleOpenEndedQuestion />
}

export default {
  title: 'Components/ScaleOpenEndedQuestion',
  component: ScaleOpenEndedQuestion,
} as ComponentMeta<typeof ScaleOpenEndedQuestion>
