// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof JustifyQuestionField> = (args) => {
//   return <JustifyQuestionField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import JustifyQuestionField from './JustifyQuestionField'

export const generated = () => {
  return <JustifyQuestionField name="" placeholder="" />
}

export default {
  title: 'Components/JustifyQuestionField',
  component: JustifyQuestionField,
} as ComponentMeta<typeof JustifyQuestionField>
