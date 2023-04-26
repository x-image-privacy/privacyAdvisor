// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof OpenEndedQuestionField> = (args) => {
//   return <OpenEndedQuestionField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import OpenEndedQuestionField from './OpenEndedQuestionField'

export const generated = () => {
  return <OpenEndedQuestionField />
}

export default {
  title: 'Components/OpenEndedQuestionField',
  component: OpenEndedQuestionField,
} as ComponentMeta<typeof OpenEndedQuestionField>
