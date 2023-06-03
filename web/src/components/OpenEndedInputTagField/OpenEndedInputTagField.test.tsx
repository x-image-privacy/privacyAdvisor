import { render } from '@redwoodjs/testing/web'

import OpenEndedInputTagField from './OpenEndedInputTagField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpenEndedInputTagField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpenEndedInputTagField />)
    }).not.toThrow()
  })
})
