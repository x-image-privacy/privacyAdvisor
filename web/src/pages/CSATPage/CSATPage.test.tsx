import { render } from '@redwoodjs/testing/web'

import CsatPage from './CsatPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CsatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CsatPage />)
    }).not.toThrow()
  })
})
