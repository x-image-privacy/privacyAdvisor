// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof OpenEndedInputTag> = (args) => {
//   return <OpenEndedInputTag {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import OpenEndedInputTag from './OpenEndedInputTag'

export const generated = () => {
  return <OpenEndedInputTag />
}

export default {
  title: 'Components/OpenEndedInputTag',
  component: OpenEndedInputTag,
} as ComponentMeta<typeof OpenEndedInputTag>
