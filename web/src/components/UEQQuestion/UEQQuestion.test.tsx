import { render } from '@redwoodjs/testing/web'
import UeqQuestion from './UEQQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UeqQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <UeqQuestion
          onChange={function (nextValue: string): void {
            throw new Error('Function not implemented.')
          }}
          leftHand="left"
          rightHand="right"
          value=""
        />
      )
    }).not.toThrow()
  })
})
