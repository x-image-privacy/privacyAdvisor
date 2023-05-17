import type {
  QueryResolvers,
  MutationResolvers,
  PlainImageSurveyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const plainImageSurveys: QueryResolvers['plainImageSurveys'] = () => {
  return db.plainImageSurvey.findMany()
}

export const plainImageSurvey: QueryResolvers['plainImageSurvey'] = ({
  id,
}) => {
  return db.plainImageSurvey.findUnique({
    where: { id },
  })
}

export const createPlainImageSurvey: MutationResolvers['createPlainImageSurvey'] =
  ({ input }) => {
    return db.plainImageSurvey.create({
      data: input,
    })
  }

export const updatePlainImageSurvey: MutationResolvers['updatePlainImageSurvey'] =
  ({ id, input }) => {
    return db.plainImageSurvey.update({
      data: input,
      where: { id },
    })
  }

export const deletePlainImageSurvey: MutationResolvers['deletePlainImageSurvey'] =
  ({ id }) => {
    return db.plainImageSurvey.delete({
      where: { id },
    })
  }

export const PlainImageSurvey: PlainImageSurveyRelationResolvers = {
  user: (_obj, { root }) => {
    return db.plainImageSurvey.findUnique({ where: { id: root?.id } }).user()
  },
}
