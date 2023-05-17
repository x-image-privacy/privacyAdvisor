import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { group: 'String', submittedAt: '2023-05-15T11:13:03.883Z' } },
    two: { data: { group: 'String', submittedAt: '2023-05-15T11:13:03.883Z' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
