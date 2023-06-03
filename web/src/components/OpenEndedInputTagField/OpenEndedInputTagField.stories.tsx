// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof OpenEndedInputTagField> = (args) => {
//   return <OpenEndedInputTagField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import OpenEndedInputTagField from './OpenEndedInputTagField'

export const generated = () => {
  return <OpenEndedInputTagField />
}

export default {
  title: 'Components/OpenEndedInputTagField',
  component: OpenEndedInputTagField,
} as ComponentMeta<typeof OpenEndedInputTagField>
