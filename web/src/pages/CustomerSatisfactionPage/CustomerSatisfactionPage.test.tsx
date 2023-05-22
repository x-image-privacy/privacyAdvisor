import { render } from '@redwoodjs/testing/web'

import CustomerSatisfactionPage from './CustomerSatisfactionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CustomerSatisfactionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomerSatisfactionPage />)
    }).not.toThrow()
  })
})
