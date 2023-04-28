import type { ComponentMeta } from '@storybook/react'

import OpenEndedQuestionField from './OpenEndedQuestionField'

export const generated = () => {
  return <OpenEndedQuestionField name={''} question={''} placeholder={''} />
}

export default {
  title: 'Components/OpenEndedQuestionField',
  component: OpenEndedQuestionField,
} as ComponentMeta<typeof OpenEndedQuestionField>

const Template = (args) => <OpenEndedQuestionField {...args} />

export const openEndedQuestionField = Template.bind({})
