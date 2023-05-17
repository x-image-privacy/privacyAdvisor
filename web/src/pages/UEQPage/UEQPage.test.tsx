import { render } from '@redwoodjs/testing/web'

import UeqPage from './UeqPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UeqPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UeqPage />)
    }).not.toThrow()
  })
})
