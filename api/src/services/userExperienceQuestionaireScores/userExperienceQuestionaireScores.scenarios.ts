import type { Prisma, UserExperienceQuestionaireScore } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.UserExperienceQuestionaireScoreCreateArgs>({
    userExperienceQuestionaireScore: {
      one: {
        data: {
          support: 272884,
          complexity: 1564644,
          efficiency: 3164094,
          clarity: 8122588,
          motivation: 9631004,
          interest: 6278468,
          norm: 2778512,
          originality: 4513388,
        },
      },
      two: {
        data: {
          support: 4570707,
          complexity: 8107061,
          efficiency: 3961934,
          clarity: 9679688,
          motivation: 2751287,
          interest: 9583536,
          norm: 8978813,
          originality: 7828788,
        },
      },
    },
  })

export type StandardScenario = ScenarioData<
  UserExperienceQuestionaireScore,
  'userExperienceQuestionaireScore'
>
