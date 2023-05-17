import type { ComponentMeta } from '@storybook/react'

import LikertScaleQuestion, {
  LikertScaleQuestionProps,
} from './LikertScaleQuestion'

export default {
  title: 'Components/LikertScaleQuestion',
  component: LikertScaleQuestion,
} as ComponentMeta<typeof LikertScaleQuestion>

export const generatedFivePointScale = () => {
  return (
    <LikertScaleQuestion
      n={5}
      question="Question"
      leftHand="Yes"
      rightHand="No"
      direction="row"
      onChange={function (_: string): void {
        throw new Error('Function not implemented.')
      }}
      value=""
    />
  )
}
const TemplateFive = (
  args: JSX.IntrinsicAttributes & LikertScaleQuestionProps
) => <LikertScaleQuestion {...args} />

export const fivePointScale = TemplateFive.bind({})

export const generatedSevenPointScale = () => {
  return (
    <LikertScaleQuestion
      n={7}
      question="Question"
      direction="row"
      leftHand="Yes"
      rightHand="No"
      onChange={function (_: string): void {
        throw new Error('Function not implemented.')
      }}
      value=""
    />
  )
}

const TemplateSeven = (
  args: JSX.IntrinsicAttributes & LikertScaleQuestionProps
) => <LikertScaleQuestion {...args} />

export const sevenPointScale = TemplateSeven.bind({})
