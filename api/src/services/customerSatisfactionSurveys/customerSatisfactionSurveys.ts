import type {
  QueryResolvers,
  MutationResolvers,
  CustomerSatisfactionSurveyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const customerSatisfactionSurveys: QueryResolvers['customerSatisfactionSurveys'] =
  () => {
    return db.customerSatisfactionSurvey.findMany()
  }

export const customerSatisfactionSurvey: QueryResolvers['customerSatisfactionSurvey'] =
  ({ id }) => {
    return db.customerSatisfactionSurvey.findUnique({
      where: { id },
    })
  }

export const customerSatisfactionSurveyByUser: QueryResolvers['customerSatisfactionSurveyByUser'] =
  ({ userId }) => {
    return db.customerSatisfactionSurvey.findUnique({
      where: { userId },
    })
  }

export const createCustomerSatisfactionSurvey: MutationResolvers['createCustomerSatisfactionSurvey'] =
  ({ input }) => {
    return db.customerSatisfactionSurvey.create({
      data: input,
    })
  }

export const updateCustomerSatisfactionSurvey: MutationResolvers['updateCustomerSatisfactionSurvey'] =
  ({ id, input }) => {
    return db.customerSatisfactionSurvey.update({
      data: input,
      where: { id },
    })
  }

export const deleteCustomerSatisfactionSurvey: MutationResolvers['deleteCustomerSatisfactionSurvey'] =
  ({ id }) => {
    return db.customerSatisfactionSurvey.delete({
      where: { id },
    })
  }

export const CustomerSatisfactionSurvey: CustomerSatisfactionSurveyRelationResolvers =
  {
    user: (_obj, { root }) => {
      return db.customerSatisfactionSurvey
        .findUnique({ where: { id: root?.id } })
        .user()
    },
    csat: (_obj, { root }) => {
      return db.customerSatisfactionSurvey
        .findUnique({ where: { id: root?.id } })
        .csat()
    },
    nps: (_obj, { root }) => {
      return db.customerSatisfactionSurvey
        .findUnique({ where: { id: root?.id } })
        .nps()
    },
    ueq: (_obj, { root }) => {
      return db.customerSatisfactionSurvey
        .findUnique({ where: { id: root?.id } })
        .ueq()
    },
  }
