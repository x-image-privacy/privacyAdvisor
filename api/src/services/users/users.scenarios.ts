import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { group: 'String', submittedAt: '2023-05-17T08:59:01.265Z' } },
    two: { data: { group: 'String', submittedAt: '2023-05-17T08:59:01.265Z' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
