import { render } from '@redwoodjs/testing/web'

import NetPromoterScorePage from './NetPromoterScorePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NpsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NetPromoterScorePage />)
    }).not.toThrow()
  })
})
