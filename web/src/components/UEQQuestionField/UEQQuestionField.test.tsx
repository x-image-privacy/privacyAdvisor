import { render } from '@redwoodjs/testing/web'

import UeqQuestionField from './UeqQuestionField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UeqQuestionField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UeqQuestionField />)
    }).not.toThrow()
  })
})
