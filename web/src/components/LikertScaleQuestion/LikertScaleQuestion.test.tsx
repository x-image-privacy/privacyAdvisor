import { render, screen } from '@redwoodjs/testing/web'
import nPointQuestion from './LikertScaleQuestion'

import IsImagePrivateQuestion from './LikertScaleQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IsImagePrivateQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <IsImagePrivateQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
      )
    }).not.toThrow()
  })

  it('renders text successfully', () => {
    expect(() => {
      render(
        <IsImagePrivateQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
      )
      expect(screen.getByText('Is this image private?')).toBeInTheDocument()
      expect(screen.getByText('Yes')).toBeInTheDocument()
      expect(screen.getByText('No')).toBeInTheDocument()
    })
  })
})

export default nPointQuestion
