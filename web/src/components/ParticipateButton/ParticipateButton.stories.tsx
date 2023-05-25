// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ParticipateButton> = (args) => {
//   return <ParticipateButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ParticipateButton from './ParticipateButton'

export const generated = () => {
  return <ParticipateButton />
}

export default {
  title: 'Components/ParticipateButton',
  component: ParticipateButton,
} as ComponentMeta<typeof ParticipateButton>
