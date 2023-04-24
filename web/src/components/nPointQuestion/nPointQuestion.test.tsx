import { render } from '@redwoodjs/testing/web'
import nPointQuestion from './nPointQuestion'

import IsImagePrivateQuestion from './nPointQuestion'

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
