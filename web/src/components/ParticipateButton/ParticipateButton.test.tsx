import { render } from '@redwoodjs/testing/web'

import ParticipateButton from './ParticipateButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ParticipateButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ParticipateButton />)
    }).not.toThrow()
  })
})
