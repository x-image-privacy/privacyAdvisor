import { render } from '@redwoodjs/testing/web'

import LikertScaleQuestionField from './LikertScaleQuestionField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LikertScaleQuestionField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LikertScaleQuestionField />)
    }).not.toThrow()
  })
})
