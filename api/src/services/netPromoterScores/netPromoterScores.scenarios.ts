import type { Prisma, NetPromoterScore } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NetPromoterScoreCreateArgs>({
  netPromoterScore: {
    one: { data: { rank: 9737698, justification: 'String' } },
    two: { data: { rank: 4558066, justification: 'String' } },
  },
})

export type StandardScenario = ScenarioData<
  NetPromoterScore,
  'netPromoterScore'
>
