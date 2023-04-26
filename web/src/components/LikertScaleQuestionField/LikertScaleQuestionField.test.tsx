import { render } from '@redwoodjs/testing/web'

import LikertScaleQuestionField from './LikertScaleQuestionField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LikertScaleQuestionField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <LikertScaleQuestionField
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
        />
      )
    }).not.toThrow()
  })
})
