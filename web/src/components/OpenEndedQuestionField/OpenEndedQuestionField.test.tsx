import { Form } from '@redwoodjs/forms'
import { render } from '@redwoodjs/testing/web'

import OpenEndedQuestionField from './OpenEndedQuestionField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpenEndedQuestionField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <OpenEndedQuestionField
            name="Q1"
            question="question"
            placeholder="here"
          />
        </Form>
      )
    }).not.toThrow()
  })
})
