import { render, screen } from '@redwoodjs/testing/web'

import JustifyQuestion from './JustifyQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JustifyQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <JustifyQuestion
          placeholder={''}
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

  it('renders square successfully', () => {
    render(
      <JustifyQuestion
        placeholder={''}
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        value={''}
      />
    )
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
