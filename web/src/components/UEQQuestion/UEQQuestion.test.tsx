import { render } from '@redwoodjs/testing/web'

import UeqQuestion from './UeqQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UeqQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UeqQuestion />)
    }).not.toThrow()
  })
})
