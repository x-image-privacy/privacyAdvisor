import { render, screen } from '@redwoodjs/testing/web'
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

  it('renders text successfully', () => {
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
    expect(screen.getByTestId('left')).toHaveTextContent('left')
    expect(screen.getByTestId('right')).toHaveTextContent('right')
  })

  it('renders radio successfully', () => {
    const scale = Array.from({ length: 7 }, (_, i) => i + 1)
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
    scale.forEach((item) => {
      expect(screen.getByTestId(`radio${item}`)).toBeInTheDocument()
    })
  })
})
