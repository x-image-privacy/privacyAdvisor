import type { Prisma, Answer } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnswerCreateArgs>({
  answer: {
    one: {
      data: {
        answer: 'String',
        submittedAt: '2023-05-16T07:39:44.267Z',
        user: {
          create: { group: 'String', submittedAt: '2023-05-16T07:39:44.267Z' },
        },
        image: { create: { imageLocation: 'String', dataLocation: 'String' } },
      },
    },
    two: {
      data: {
        answer: 'String',
        submittedAt: '2023-05-16T07:39:44.267Z',
        user: {
          create: { group: 'String', submittedAt: '2023-05-16T07:39:44.267Z' },
        },
        image: { create: { imageLocation: 'String', dataLocation: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Answer, 'answer'>
