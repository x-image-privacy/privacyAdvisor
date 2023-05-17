import type {
  QueryResolvers,
  MutationResolvers,
  UserExperienceQuestionaireScoreRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userExperienceQuestionaireScores: QueryResolvers['userExperienceQuestionaireScores'] =
  () => {
    return db.userExperienceQuestionaireScore.findMany()
  }

export const userExperienceQuestionaireScore: QueryResolvers['userExperienceQuestionaireScore'] =
  ({ id }) => {
    return db.userExperienceQuestionaireScore.findUnique({
      where: { id },
    })
  }

export const createUserExperienceQuestionaireScore: MutationResolvers['createUserExperienceQuestionaireScore'] =
  ({ input }) => {
    return db.userExperienceQuestionaireScore.create({
      data: input,
    })
  }

export const updateUserExperienceQuestionaireScore: MutationResolvers['updateUserExperienceQuestionaireScore'] =
  ({ id, input }) => {
    return db.userExperienceQuestionaireScore.update({
      data: input,
      where: { id },
    })
  }

export const deleteUserExperienceQuestionaireScore: MutationResolvers['deleteUserExperienceQuestionaireScore'] =
  ({ id }) => {
    return db.userExperienceQuestionaireScore.delete({
      where: { id },
    })
  }

export const UserExperienceQuestionaireScore: UserExperienceQuestionaireScoreRelationResolvers =
  {
    CustomerSatisfactionSurvey: (_obj, { root }) => {
      return db.userExperienceQuestionaireScore
        .findUnique({ where: { id: root?.id } })
        .CustomerSatisfactionSurvey()
    },
  }
