import type { ImageSurvey } from '@prisma/client'

import {
  imageSurveys,
  imageSurvey,
  createImageSurvey,
  updateImageSurvey,
  deleteImageSurvey,
} from './imageSurveys'
import type { StandardScenario } from './imageSurveys.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('imageSurveys', () => {
  scenario('returns all imageSurveys', async (scenario: StandardScenario) => {
    const result = await imageSurveys()

    expect(result.length).toEqual(Object.keys(scenario.imageSurvey).length)
  })

  scenario(
    'returns a single imageSurvey',
    async (scenario: StandardScenario) => {
      const result = await imageSurvey({ id: scenario.imageSurvey.one.id })

      expect(result).toEqual(scenario.imageSurvey.one)
    }
  )

  scenario('creates a imageSurvey', async (scenario: StandardScenario) => {
    const result = await createImageSurvey({
      input: {
        userId: scenario.imageSurvey.two.userId,
        imageId: scenario.imageSurvey.two.imageId,
        hasInterface: true,
        privateRank: 160405,
        publicElem: 'String',
        privateElem: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.imageSurvey.two.userId)
    expect(result.imageId).toEqual(scenario.imageSurvey.two.imageId)
    expect(result.hasInterface).toEqual(true)
    expect(result.privateRank).toEqual(160405)
    expect(result.publicElem).toEqual('String')
    expect(result.privateElem).toEqual('String')
  })

  scenario('updates a imageSurvey', async (scenario: StandardScenario) => {
    const original = (await imageSurvey({
      id: scenario.imageSurvey.one.id,
    })) as ImageSurvey
    const result = await updateImageSurvey({
      id: original.id,
      input: { hasInterface: false },
    })

    expect(result.hasInterface).toEqual(false)
  })

  scenario('deletes a imageSurvey', async (scenario: StandardScenario) => {
    const original = (await deleteImageSurvey({
      id: scenario.imageSurvey.one.id,
    })) as ImageSurvey
    const result = await imageSurvey({ id: original.id })

    expect(result).toEqual(null)
  })
})
