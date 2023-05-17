import type { NetPromoterScore } from '@prisma/client'

import {
  netPromoterScores,
  netPromoterScore,
  createNetPromoterScore,
  updateNetPromoterScore,
  deleteNetPromoterScore,
} from './netPromoterScores'
import type { StandardScenario } from './netPromoterScores.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('netPromoterScores', () => {
  scenario(
    'returns all netPromoterScores',
    async (scenario: StandardScenario) => {
      const result = await netPromoterScores()

      expect(result.length).toEqual(
        Object.keys(scenario.netPromoterScore).length
      )
    }
  )

  scenario(
    'returns a single netPromoterScore',
    async (scenario: StandardScenario) => {
      const result = await netPromoterScore({
        id: scenario.netPromoterScore.one.id,
      })

      expect(result).toEqual(scenario.netPromoterScore.one)
    }
  )

  scenario('creates a netPromoterScore', async () => {
    const result = await createNetPromoterScore({
      input: { rank: 202859, justification: 'String' },
    })

    expect(result.rank).toEqual(202859)
    expect(result.justification).toEqual('String')
  })

  scenario('updates a netPromoterScore', async (scenario: StandardScenario) => {
    const original = (await netPromoterScore({
      id: scenario.netPromoterScore.one.id,
    })) as NetPromoterScore
    const result = await updateNetPromoterScore({
      id: original.id,
      input: { rank: 2935095 },
    })

    expect(result.rank).toEqual(2935095)
  })

  scenario('deletes a netPromoterScore', async (scenario: StandardScenario) => {
    const original = (await deleteNetPromoterScore({
      id: scenario.netPromoterScore.one.id,
    })) as NetPromoterScore
    const result = await netPromoterScore({ id: original.id })

    expect(result).toEqual(null)
  })
})
