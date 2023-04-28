import { render } from '@redwoodjs/testing/web'

import ScaleOpenEndedQuestion from './ScaleOpenEndedQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ScaleOpenEndedQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScaleOpenEndedQuestion />)
    }).not.toThrow()
  })
})
