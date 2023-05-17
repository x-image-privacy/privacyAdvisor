import type { Answer } from '@prisma/client'

import {
  answers,
  answer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} from './answers'
import type { StandardScenario } from './answers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('answers', () => {
  scenario('returns all answers', async (scenario: StandardScenario) => {
    const result = await answers()

    expect(result.length).toEqual(Object.keys(scenario.answer).length)
  })

  scenario('returns a single answer', async (scenario: StandardScenario) => {
    const result = await answer({ id: scenario.answer.one.id })

    expect(result).toEqual(scenario.answer.one)
  })

  scenario('creates a answer', async (scenario: StandardScenario) => {
    const result = await createAnswer({
      input: {
        userId: scenario.answer.two.userId,
        imageId: scenario.answer.two.imageId,
        answer: 'String',
        submittedAt: '2023-05-16T07:39:44.238Z',
      },
    })

    expect(result.userId).toEqual(scenario.answer.two.userId)
    expect(result.imageId).toEqual(scenario.answer.two.imageId)
    expect(result.answer).toEqual('String')
    expect(result.submittedAt).toEqual(new Date('2023-05-16T07:39:44.238Z'))
  })

  scenario('updates a answer', async (scenario: StandardScenario) => {
    const original = (await answer({ id: scenario.answer.one.id })) as Answer
    const result = await updateAnswer({
      id: original.id,
      input: { answer: 'String2' },
    })

    expect(result.answer).toEqual('String2')
  })

  scenario('deletes a answer', async (scenario: StandardScenario) => {
    const original = (await deleteAnswer({
      id: scenario.answer.one.id,
    })) as Answer
    const result = await answer({ id: original.id })

    expect(result).toEqual(null)
  })
})
