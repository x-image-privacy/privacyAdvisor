import type { PlainImageSurvey } from '@prisma/client'

import {
  plainImageSurveys,
  plainImageSurvey,
  createPlainImageSurvey,
  updatePlainImageSurvey,
  deletePlainImageSurvey,
} from './plainImageSurveys'
import type { StandardScenario } from './plainImageSurveys.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plainImageSurveys', () => {
  scenario(
    'returns all plainImageSurveys',
    async (scenario: StandardScenario) => {
      const result = await plainImageSurveys()

      expect(result.length).toEqual(
        Object.keys(scenario.plainImageSurvey).length
      )
    }
  )

  scenario(
    'returns a single plainImageSurvey',
    async (scenario: StandardScenario) => {
      const result = await plainImageSurvey({
        id: scenario.plainImageSurvey.one.id,
      })

      expect(result).toEqual(scenario.plainImageSurvey.one)
    }
  )

  scenario('creates a plainImageSurvey', async (scenario: StandardScenario) => {
    const result = await createPlainImageSurvey({
      input: {
        userId: scenario.plainImageSurvey.two.userId,
        privateRank: 6526459,
        publicElem: 'String',
        privateElem: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.plainImageSurvey.two.userId)
    expect(result.privateRank).toEqual(6526459)
    expect(result.publicElem).toEqual('String')
    expect(result.privateElem).toEqual('String')
  })

  scenario('updates a plainImageSurvey', async (scenario: StandardScenario) => {
    const original = (await plainImageSurvey({
      id: scenario.plainImageSurvey.one.id,
    })) as PlainImageSurvey
    const result = await updatePlainImageSurvey({
      id: original.id,
      input: { privateRank: 207927 },
    })

    expect(result.privateRank).toEqual(207927)
  })

  scenario('deletes a plainImageSurvey', async (scenario: StandardScenario) => {
    const original = (await deletePlainImageSurvey({
      id: scenario.plainImageSurvey.one.id,
    })) as PlainImageSurvey
    const result = await plainImageSurvey({ id: original.id })

    expect(result).toEqual(null)
  })
})
