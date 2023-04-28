import type { ComponentMeta } from '@storybook/react'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

import LikertScaleQuestionField from './LikertScaleQuestionField'

export const generated = () => {
  return (
    <LikertScaleQuestionField
      n={5}
      question="Is this image private?"
      leftHand="No"
      rightHand="Yes"
      name={''}
    />
  )
}

export default {
  title: 'Components/LikertScaleQuestionField',
  component: LikertScaleQuestionField,
} as ComponentMeta<typeof LikertScaleQuestionField>

const Template = (args) => <OpenEndedQuestionField {...args} />
export const likertScaleQuestionField = Template.bind({})
