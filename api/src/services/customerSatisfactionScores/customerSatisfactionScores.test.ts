import type { CustomerSatisfactionScore } from '@prisma/client'

import {
  customerSatisfactionScores,
  customerSatisfactionScore,
  createCustomerSatisfactionScore,
  updateCustomerSatisfactionScore,
  deleteCustomerSatisfactionScore,
} from './customerSatisfactionScores'
import type { StandardScenario } from './customerSatisfactionScores.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('customerSatisfactionScores', () => {
  scenario(
    'returns all customerSatisfactionScores',
    async (scenario: StandardScenario) => {
      const result = await customerSatisfactionScores()

      expect(result.length).toEqual(
        Object.keys(scenario.customerSatisfactionScore).length
      )
    }
  )

  scenario(
    'returns a single customerSatisfactionScore',
    async (scenario: StandardScenario) => {
      const result = await customerSatisfactionScore({
        id: scenario.customerSatisfactionScore.one.id,
      })

      expect(result).toEqual(scenario.customerSatisfactionScore.one)
    }
  )

  scenario('creates a customerSatisfactionScore', async () => {
    const result = await createCustomerSatisfactionScore({
      input: { rank: 9992612, justification: 'String' },
    })

    expect(result.rank).toEqual(9992612)
    expect(result.justification).toEqual('String')
  })

  scenario(
    'updates a customerSatisfactionScore',
    async (scenario: StandardScenario) => {
      const original = (await customerSatisfactionScore({
        id: scenario.customerSatisfactionScore.one.id,
      })) as CustomerSatisfactionScore
      const result = await updateCustomerSatisfactionScore({
        id: original.id,
        input: { rank: 6162178 },
      })

      expect(result.rank).toEqual(6162178)
    }
  )

  scenario(
    'deletes a customerSatisfactionScore',
    async (scenario: StandardScenario) => {
      const original = (await deleteCustomerSatisfactionScore({
        id: scenario.customerSatisfactionScore.one.id,
      })) as CustomerSatisfactionScore
      const result = await customerSatisfactionScore({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
