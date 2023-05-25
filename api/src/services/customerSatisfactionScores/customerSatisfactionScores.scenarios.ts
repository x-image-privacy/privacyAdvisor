import type { Prisma, CustomerSatisfactionScore } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.CustomerSatisfactionScoreCreateArgs>({
    customerSatisfactionScore: {
      one: { data: { rank: 112960, justification: 'String' } },
      two: { data: { rank: 8132974, justification: 'String' } },
    },
  })

export type StandardScenario = ScenarioData<
  CustomerSatisfactionScore,
  'customerSatisfactionScore'
>
