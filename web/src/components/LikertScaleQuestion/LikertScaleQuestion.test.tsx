import { Controller } from '@redwoodjs/forms'
import { render, screen, fireEvent } from '@redwoodjs/testing/web'
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
          value=""
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
        value=""
      />
    )
    expect(screen.getByTestId('left')).toHaveTextContent('No')
    expect(screen.getByTestId('right')).toHaveTextContent('Yes')
    expect(screen.getByTestId('question')).toHaveTextContent(
      'Is this image private?'
    )
  })

  it('renders radio successfully', () => {
    const N = 5
    const scale = Array.from({ length: N }, (_, i) => i + 1)

    render(
      <LikertScaleQuestion
        n={N}
        question="Is this image private?"
        leftHand="No"
        rightHand="Yes"
        onChange={function (nextValue: string): void {
          throw new Error('Function not implemented.')
        }}
        value=""
      />
    )

    scale.forEach((item) => {
      expect(screen.getByTestId(`radio${item}`)).toBeInTheDocument()
    })
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
        value=""
      />
    )
    expect(screen.getByTestId('square')).toBeInTheDocument()
  })

  it('check radio successfully', () => {
    render(
      <LikertScaleQuestion
        n={5}
        question="Is this image private?"
        leftHand="No"
        rightHand="Yes"
        onChange={(e) => console.log(e)}
        value=""
      />
    )

    const labelRadio: HTMLInputElement = screen.getByTestId('radio1')
    fireEvent.click(labelRadio, { target: { checked: true } })
    expect(labelRadio.checked).toEqual(true)
  })
})

export default nPointQuestion
