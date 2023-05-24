import { render } from '@redwoodjs/testing/web'

import CsatPage from './CustomerSatPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CsatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CsatPage />)
    }).not.toThrow()
  })
})
