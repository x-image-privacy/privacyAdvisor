import { Form } from '@redwoodjs/forms'
import { render } from '@redwoodjs/testing/web'

import JustifyQuestionField from './JustifyQuestionField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JustifyQuestionField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <JustifyQuestionField name="" placeholder="" />
        </Form>
      )
    }).not.toThrow()
  })
})
