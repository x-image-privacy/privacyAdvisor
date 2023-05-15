import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { group: 'String' } },
    two: { data: { group: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
