import type {
  QueryResolvers,
  MutationResolvers,
  CustomerSatisfactionScoreRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const customerSatisfactionScores: QueryResolvers['customerSatisfactionScores'] =
  () => {
    return db.customerSatisfactionScore.findMany()
  }

export const customerSatisfactionScore: QueryResolvers['customerSatisfactionScore'] =
  ({ id }) => {
    return db.customerSatisfactionScore.findUnique({
      where: { id },
    })
  }

export const createCustomerSatisfactionScore: MutationResolvers['createCustomerSatisfactionScore'] =
  ({ input }) => {
    return db.customerSatisfactionScore.create({
      data: input,
    })
  }

export const updateCustomerSatisfactionScore: MutationResolvers['updateCustomerSatisfactionScore'] =
  ({ id, input }) => {
    return db.customerSatisfactionScore.update({
      data: input,
      where: { id },
    })
  }

export const CustomerSatisfactionScore: CustomerSatisfactionScoreRelationResolvers =
  {
    CustomerSatisfactionSurvey: (_obj, { root }) => {
      return db.customerSatisfactionScore
        .findUnique({ where: { id: root?.id } })
        .CustomerSatisfactionSurvey()
    },
  }
