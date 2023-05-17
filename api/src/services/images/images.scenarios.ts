import type { Prisma, Image } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ImageCreateArgs>({
  image: {
    one: { data: { imageLocation: 'String', dataLocation: 'String' } },
    two: { data: { imageLocation: 'String', dataLocation: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Image, 'image'>
