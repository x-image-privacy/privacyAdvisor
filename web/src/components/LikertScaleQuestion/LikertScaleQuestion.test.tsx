import { render, screen } from '@redwoodjs/testing/web'
import nPointQuestion from './LikertScaleQuestion'

import LikertScaleQuestion from './LikertScaleQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IsImagePrivateQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <LikertScaleQuestion
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
          onChange={function (nextValue: string): void {
            throw new Error('Function not implemented.')
          }}
          value={''}
        />
      )
    }).not.toThrow()
  })

  it('renders text successfully', () => {
    render(
      <LikertScaleQuestion
        n={5}
        question="Is this image private?"
        leftHand="No"
        rightHand="Yes"
        onChange={function (nextValue: string): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('left')).toHaveTextContent('No')
    expect(screen.getByTestId('right')).toHaveTextContent('Yes')
    expect(screen.getByTestId('question')).toHaveTextContent(
      'Is this image private?'
    )
  })

  it('renders radio successfully', () => {
    render(
      <LikertScaleQuestion
        n={5}
        question="Is this image private?"
        leftHand="No"
        rightHand="Yes"
        onChange={function (nextValue: string): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )

    expect(screen.getByTestId('radio1')).toBeInTheDocument()
    expect(screen.getByTestId('radio2')).toBeInTheDocument()
    expect(screen.getByTestId('radio3')).toBeInTheDocument()
    expect(screen.getByTestId('radio4')).toBeInTheDocument()
    expect(screen.getByTestId('radio5')).toBeInTheDocument()
  })

  it('renders square successfully', () => {
    render(
      <LikertScaleQuestion
        n={5}
        question="Is this image private?"
        leftHand="No"
        rightHand="Yes"
        onChange={function (nextValue: string): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('square')).toBeInTheDocument()
  })
})

export default nPointQuestion
