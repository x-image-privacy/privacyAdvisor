import type { PrivateRank } from '@prisma/client'

import {
  privateRanks,
  privateRank,
  createPrivateRank,
  updatePrivateRank,
  deletePrivateRank,
} from './privateRanks'
import type { StandardScenario } from './privateRanks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('privateRanks', () => {
  scenario('returns all privateRanks', async (scenario: StandardScenario) => {
    const result = await privateRanks()

    expect(result.length).toEqual(Object.keys(scenario.privateRank).length)
  })

  scenario(
    'returns a single privateRank',
    async (scenario: StandardScenario) => {
      const result = await privateRank({ id: scenario.privateRank.one.id })

      expect(result).toEqual(scenario.privateRank.one)
    }
  )

  scenario('creates a privateRank', async (scenario: StandardScenario) => {
    const result = await createPrivateRank({
      input: { userId: scenario.privateRank.two.userId, rank: 4752830 },
    })

    expect(result.userId).toEqual(scenario.privateRank.two.userId)
    expect(result.rank).toEqual(4752830)
  })

  scenario('updates a privateRank', async (scenario: StandardScenario) => {
    const original = (await privateRank({
      id: scenario.privateRank.one.id,
    })) as PrivateRank
    const result = await updatePrivateRank({
      id: original.id,
      input: { rank: 8530644 },
    })

    expect(result.rank).toEqual(8530644)
  })

  scenario('deletes a privateRank', async (scenario: StandardScenario) => {
    const original = (await deletePrivateRank({
      id: scenario.privateRank.one.id,
    })) as PrivateRank
    const result = await privateRank({ id: original.id })

    expect(result).toEqual(null)
  })
})
