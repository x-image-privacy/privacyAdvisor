import { render } from '@redwoodjs/testing/web'

import OpenEndedQuestion from './OpenEndedQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpenEndedQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpenEndedQuestion />)
    }).not.toThrow()
  })
})
