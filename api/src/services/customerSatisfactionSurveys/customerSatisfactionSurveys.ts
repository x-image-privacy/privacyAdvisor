import type {
  QueryResolvers,
  MutationResolvers,
  CustomerSatisfactionSurveyRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

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
    if (input.userId !== context.currentUser.id) {
      throw new ForbiddenError('User id')
    } else {
      return db.customerSatisfactionSurvey.create({
        data: input,
      })
    }
  }

export const updateCustomerSatisfactionSurvey: MutationResolvers['updateCustomerSatisfactionSurvey'] =
  async ({ id, input }) => {
    const previous = await db.imageSurvey.findUnique({
      where: { id },
    })

    if (previous.userId !== context.currentUser.id) {
      throw new ForbiddenError('User id')
    } else {
      return db.customerSatisfactionSurvey.update({
        data: input,
        where: { id },
      })
    }
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
