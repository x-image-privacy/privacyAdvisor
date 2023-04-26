// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LikertScaleQuestionField> = (args) => {
//   return <LikertScaleQuestionField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LikertScaleQuestionField from './LikertScaleQuestionField'

export const generated = () => {
  return (
    <LikertScaleQuestionField
      n={5}
      question="Is this image private?"
      leftHand="No"
      rightHand="Yes"
    />
  )
}

export default {
  title: 'Components/LikertScaleQuestionField',
  component: LikertScaleQuestionField,
} as ComponentMeta<typeof LikertScaleQuestionField>
