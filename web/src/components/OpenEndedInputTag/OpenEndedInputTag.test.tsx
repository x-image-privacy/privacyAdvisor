import { render } from '@redwoodjs/testing/web'

import OpenEndedInputTag from './OpenEndedInputTag'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpenEndedInputTag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpenEndedInputTag />)
    }).not.toThrow()
  })
})
