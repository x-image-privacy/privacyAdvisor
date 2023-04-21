// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof IsImagePrivateQuestion> = (args) => {
//   return <IsImagePrivateQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import IsImagePrivateQuestion from './IsImagePrivateQuestion'

export const generated = () => {
  return <IsImagePrivateQuestion />
}

export default {
  title: 'Components/IsImagePrivateQuestion',
  component: IsImagePrivateQuestion,
} as ComponentMeta<typeof IsImagePrivateQuestion>
