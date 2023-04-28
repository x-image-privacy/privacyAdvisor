import { render } from '@redwoodjs/testing/web'

import GroupBPage from './GroupBPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupBPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupBPage />)
    }).not.toThrow()
  })
})
