import { render } from '@redwoodjs/testing/web'

import JustifyQuestion from './JustifyQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JustifyQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JustifyQuestion />)
    }).not.toThrow()
  })
})
