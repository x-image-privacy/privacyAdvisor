import { render, screen, fireEvent } from '@redwoodjs/testing/web'

import OpenEndedQuestion from './OpenEndedQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpenEndedQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <OpenEndedQuestion
          question="Which elements do you consider as public in this image?"
          placeholder="Hello"
          onChange={function (_: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          }}
          value={''}
        />
      )
    }).not.toThrow()
  })

  it('renders text successfully', () => {
    render(
      <OpenEndedQuestion
        question="Test"
        placeholder="Hello"
        onChange={function (_: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('question')).toHaveTextContent('Test')
  })

  it('renders input successfully', () => {
    render(
      <OpenEndedQuestion
        question="Test"
        placeholder="Hello"
        onChange={function (_: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('renders square successfully', () => {
    render(
      <OpenEndedQuestion
        question="Test"
        placeholder="Hello"
        onChange={function (_: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('square')).toBeInTheDocument()
  })

  it('input change successfully', () => {
    render(
      <OpenEndedQuestion
        question="Test"
        placeholder="Hello"
        onChange={(e) => console.log(e)}
        value=""
      />
    )
    const inputElement: HTMLInputElement = screen.getByTestId('input')
    expect(inputElement.value).toBe('')

    fireEvent.change(inputElement, { target: { value: 'hello' } })
    // expect(inputElement.value).toBe('hello')
    // expect(inputElement).toHaveValue('hello')
  })
})
