import type { ComponentMeta } from '@storybook/react'

import OpenEndedQuestion, { OpenEndedQuestionProps } from './OpenEndedQuestion'

export default {
  title: 'Components/OpenEndedQuestion',
  component: OpenEndedQuestion,
} as ComponentMeta<typeof OpenEndedQuestion>

export const generated = () => {
  return (
    <OpenEndedQuestion
      question="Hello"
      onChange={function (_: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
      }}
      placeholder="Here"
      value=""
    />
  )
}

const Template = (args: JSX.IntrinsicAttributes & OpenEndedQuestionProps) => (
  <OpenEndedQuestion {...args} />
)

export const openEndedQuestion = Template.bind({})
