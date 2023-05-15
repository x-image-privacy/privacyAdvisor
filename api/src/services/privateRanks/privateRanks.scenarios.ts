import type { Prisma, PrivateRank } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PrivateRankCreateArgs>({
  privateRank: {
    one: {
      data: {
        rank: 726902,
        user: {
          create: { group: 'String', submittedAt: '2023-05-15T08:58:51.360Z' },
        },
      },
    },
    two: {
      data: {
        rank: 8605233,
        user: {
          create: { group: 'String', submittedAt: '2023-05-15T08:58:51.360Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PrivateRank, 'privateRank'>
