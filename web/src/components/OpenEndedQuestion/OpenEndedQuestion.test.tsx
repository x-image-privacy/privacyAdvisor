import { render, screen } from '@redwoodjs/testing/web'

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
          onChange={function (
            event: React.ChangeEvent<HTMLInputElement>
          ): void {
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
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
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
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
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
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('square')).toBeInTheDocument()
  })
})
