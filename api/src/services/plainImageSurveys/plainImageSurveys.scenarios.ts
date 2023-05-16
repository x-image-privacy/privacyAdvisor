import type { Prisma, PlainImageSurvey } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PlainImageSurveyCreateArgs>({
  plainImageSurvey: {
    one: {
      data: {
        privateRank: 3162625,
        publicElem: 'String',
        privateElem: 'String',
        user: {
          create: { group: 'String', submittedAt: '2023-05-16T13:21:19.231Z' },
        },
      },
    },
    two: {
      data: {
        privateRank: 7092071,
        publicElem: 'String',
        privateElem: 'String',
        user: {
          create: { group: 'String', submittedAt: '2023-05-16T13:21:19.231Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  PlainImageSurvey,
  'plainImageSurvey'
>
