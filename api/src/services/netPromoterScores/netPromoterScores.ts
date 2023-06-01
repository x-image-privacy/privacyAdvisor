import type {
  QueryResolvers,
  MutationResolvers,
  NetPromoterScoreRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const netPromoterScores: QueryResolvers['netPromoterScores'] = () => {
  return db.netPromoterScore.findMany()
}

export const netPromoterScore: QueryResolvers['netPromoterScore'] = ({
  id,
}) => {
  return db.netPromoterScore.findUnique({
    where: { id },
  })
}

export const createNetPromoterScore: MutationResolvers['createNetPromoterScore'] =
  ({ input }) => {
    return db.netPromoterScore.create({
      data: input,
    })
  }

export const updateNetPromoterScore: MutationResolvers['updateNetPromoterScore'] =
  ({ id, input }) => {
    return db.netPromoterScore.update({
      data: input,
      where: { id },
    })
  }

export const NetPromoterScore: NetPromoterScoreRelationResolvers = {
  CustomerSatisfactionSurvey: (_obj, { root }) => {
    return db.netPromoterScore
      .findUnique({ where: { id: root?.id } })
      .CustomerSatisfactionSurvey()
  },
}
