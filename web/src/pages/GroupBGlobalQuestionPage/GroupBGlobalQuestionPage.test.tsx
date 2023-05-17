import { render } from '@redwoodjs/testing/web'

import GroupBGlobalQuestionPage from './GroupBGlobalQuestionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupBGlobalQuestionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupBGlobalQuestionPage />)
    }).not.toThrow()
  })
})
