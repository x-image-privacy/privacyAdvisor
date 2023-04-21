import { render } from '@redwoodjs/testing/web'

import IsImagePrivateQuestion from './IsImagePrivateQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IsImagePrivateQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IsImagePrivateQuestion />)
    }).not.toThrow()
  })
})
