import type { UserExperienceQuestionaireScore } from '@prisma/client'

import {
  userExperienceQuestionaireScores,
  userExperienceQuestionaireScore,
  createUserExperienceQuestionaireScore,
  updateUserExperienceQuestionaireScore,
} from './userExperienceQuestionaireScores'
import type { StandardScenario } from './userExperienceQuestionaireScores.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userExperienceQuestionaireScores', () => {
  scenario(
    'returns all userExperienceQuestionaireScores',
    async (scenario: StandardScenario) => {
      const result = await userExperienceQuestionaireScores()

      expect(result.length).toEqual(
        Object.keys(scenario.userExperienceQuestionaireScore).length
      )
    }
  )

  scenario(
    'returns a single userExperienceQuestionaireScore',
    async (scenario: StandardScenario) => {
      const result = await userExperienceQuestionaireScore({
        id: scenario.userExperienceQuestionaireScore.one.id,
      })

      expect(result).toEqual(scenario.userExperienceQuestionaireScore.one)
    }
  )

  scenario('creates a userExperienceQuestionaireScore', async () => {
    const result = await createUserExperienceQuestionaireScore({
      input: {
        support: 7306495,
        complexity: 7133457,
        efficiency: 6458137,
        clarity: 6318165,
        motivation: 5589850,
        interest: 4172094,
        norm: 3230463,
        originality: 1953097,
      },
    })

    expect(result.support).toEqual(7306495)
    expect(result.complexity).toEqual(7133457)
    expect(result.efficiency).toEqual(6458137)
    expect(result.clarity).toEqual(6318165)
    expect(result.motivation).toEqual(5589850)
    expect(result.interest).toEqual(4172094)
    expect(result.norm).toEqual(3230463)
    expect(result.originality).toEqual(1953097)
  })

  scenario(
    'updates a userExperienceQuestionaireScore',
    async (scenario: StandardScenario) => {
      const original = (await userExperienceQuestionaireScore({
        id: scenario.userExperienceQuestionaireScore.one.id,
      })) as UserExperienceQuestionaireScore
      const result = await updateUserExperienceQuestionaireScore({
        id: original.id,
        input: { support: 2740629 },
      })

      expect(result.support).toEqual(2740629)
    }
  )
})
