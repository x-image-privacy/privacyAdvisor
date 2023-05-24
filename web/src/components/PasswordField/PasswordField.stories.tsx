// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PasswordField> = (args) => {
//   return <PasswordField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PasswordField from './PasswordField'

export const generated = () => {
  return <PasswordField />
}

export default {
  title: 'Components/PasswordField',
  component: PasswordField,
} as ComponentMeta<typeof PasswordField>
