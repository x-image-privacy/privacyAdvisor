import type { Prisma, ImageSurvey } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ImageSurveyCreateArgs>({
  imageSurvey: {
    one: {
      data: {
        hasInterface: true,
        privateRank: 8445522,
        publicElem: 'String',
        privateElem: 'String',
        user: {
          create: { group: 'String', submittedAt: '2023-05-17T09:03:46.634Z' },
        },
        image: { create: { imageLocation: 'String', dataLocation: 'String' } },
      },
    },
    two: {
      data: {
        hasInterface: true,
        privateRank: 2069931,
        publicElem: 'String',
        privateElem: 'String',
        user: {
          create: { group: 'String', submittedAt: '2023-05-17T09:03:46.634Z' },
        },
        image: { create: { imageLocation: 'String', dataLocation: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ImageSurvey, 'imageSurvey'>
