import type { Prisma, Demographic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DemographicCreateArgs>({
  demographic: {
    one: {
      data: {
        age: 2822578,
        education: 6433744,
        technology: 8602137,
        privacy: 6570762,
        user: {
          create: { group: 'String', submittedAt: '2023-05-24T08:55:30.405Z' },
        },
      },
    },
    two: {
      data: {
        age: 7780421,
        education: 860660,
        technology: 2301357,
        privacy: 6204760,
        user: {
          create: { group: 'String', submittedAt: '2023-05-24T08:55:30.405Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Demographic, 'demographic'>
