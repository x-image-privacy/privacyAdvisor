import type { Prisma, CustomerSatisfactionSurvey } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.CustomerSatisfactionSurveyCreateArgs>({
    customerSatisfactionSurvey: {
      one: {
        data: {
          user: {
            create: {
              group: 'String',
              submittedAt: '2023-05-17T09:40:53.131Z',
            },
          },
        },
      },
      two: {
        data: {
          user: {
            create: {
              group: 'String',
              submittedAt: '2023-05-17T09:40:53.131Z',
            },
          },
        },
      },
    },
  })

export type StandardScenario = ScenarioData<
  CustomerSatisfactionSurvey,
  'customerSatisfactionSurvey'
>
