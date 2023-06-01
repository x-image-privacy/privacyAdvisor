import { render } from '@redwoodjs/testing/web'

import EndSurveyPage from './EndSurveyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EndSurveyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EndSurveyPage />)
    }).not.toThrow()
  })
})
