import type { CustomerSatisfactionSurvey } from '@prisma/client'

import {
  customerSatisfactionSurveys,
  customerSatisfactionSurvey,
  createCustomerSatisfactionSurvey,
  updateCustomerSatisfactionSurvey,
  deleteCustomerSatisfactionSurvey,
} from './customerSatisfactionSurveys'
import type { StandardScenario } from './customerSatisfactionSurveys.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('customerSatisfactionSurveys', () => {
  scenario(
    'returns all customerSatisfactionSurveys',
    async (scenario: StandardScenario) => {
      const result = await customerSatisfactionSurveys()

      expect(result.length).toEqual(
        Object.keys(scenario.customerSatisfactionSurvey).length
      )
    }
  )

  scenario(
    'returns a single customerSatisfactionSurvey',
    async (scenario: StandardScenario) => {
      const result = await customerSatisfactionSurvey({
        id: scenario.customerSatisfactionSurvey.one.id,
      })

      expect(result).toEqual(scenario.customerSatisfactionSurvey.one)
    }
  )

  scenario(
    'creates a customerSatisfactionSurvey',
    async (scenario: StandardScenario) => {
      const result = await createCustomerSatisfactionSurvey({
        input: { userId: scenario.customerSatisfactionSurvey.two.userId },
      })

      expect(result.userId).toEqual(
        scenario.customerSatisfactionSurvey.two.userId
      )
    }
  )

  scenario(
    'updates a customerSatisfactionSurvey',
    async (scenario: StandardScenario) => {
      const original = (await customerSatisfactionSurvey({
        id: scenario.customerSatisfactionSurvey.one.id,
      })) as CustomerSatisfactionSurvey
      const result = await updateCustomerSatisfactionSurvey({
        id: original.id,
        input: { userId: scenario.customerSatisfactionSurvey.two.userId },
      })

      expect(result.userId).toEqual(
        scenario.customerSatisfactionSurvey.two.userId
      )
    }
  )

  scenario(
    'deletes a customerSatisfactionSurvey',
    async (scenario: StandardScenario) => {
      const original = (await deleteCustomerSatisfactionSurvey({
        id: scenario.customerSatisfactionSurvey.one.id,
      })) as CustomerSatisfactionSurvey
      const result = await customerSatisfactionSurvey({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
