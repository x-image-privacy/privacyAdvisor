import { render } from '@redwoodjs/testing/web'
import nPointQuestion from './LikertScaleQuestion'

import IsImagePrivateQuestion from './LikertScaleQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IsImagePrivateQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IsImagePrivateQuestion />)
    }).not.toThrow()
  })
})

export default nPointQuestion
