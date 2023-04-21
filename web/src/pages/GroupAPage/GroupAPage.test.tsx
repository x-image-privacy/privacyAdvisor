import { render } from '@redwoodjs/testing/web'

import GroupAPage from './GroupAPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupAPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupAPage />)
    }).not.toThrow()
  })
})
