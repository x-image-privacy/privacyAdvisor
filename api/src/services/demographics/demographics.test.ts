import type { Demographic } from '@prisma/client'

import {
  demographics,
  demographic,
  createDemographic,
  updateDemographic,
  deleteDemographic,
} from './demographics'
import type { StandardScenario } from './demographics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('demographics', () => {
  scenario('returns all demographics', async (scenario: StandardScenario) => {
    const result = await demographics()

    expect(result.length).toEqual(Object.keys(scenario.demographic).length)
  })

  scenario(
    'returns a single demographic',
    async (scenario: StandardScenario) => {
      const result = await demographic({ id: scenario.demographic.one.id })

      expect(result).toEqual(scenario.demographic.one)
    }
  )

  scenario('creates a demographic', async (scenario: StandardScenario) => {
    const result = await createDemographic({
      input: {
        userId: scenario.demographic.two.userId,
        age: 7153000,
        education: 6192199,
        technology: 1561848,
        privacy: 1474780,
      },
    })

    expect(result.userId).toEqual(scenario.demographic.two.userId)
    expect(result.age).toEqual(7153000)
    expect(result.education).toEqual(6192199)
    expect(result.technology).toEqual(1561848)
    expect(result.privacy).toEqual(1474780)
  })

  scenario('updates a demographic', async (scenario: StandardScenario) => {
    const original = (await demographic({
      id: scenario.demographic.one.id,
    })) as Demographic
    const result = await updateDemographic({
      id: original.id,
      input: { age: 6434044 },
    })

    expect(result.age).toEqual(6434044)
  })

  scenario('deletes a demographic', async (scenario: StandardScenario) => {
    const original = (await deleteDemographic({
      id: scenario.demographic.one.id,
    })) as Demographic
    const result = await demographic({ id: original.id })

    expect(result).toEqual(null)
  })
})
