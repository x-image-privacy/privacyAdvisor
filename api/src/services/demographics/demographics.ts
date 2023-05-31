import type {
  QueryResolvers,
  MutationResolvers,
  DemographicRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const demographics: QueryResolvers['demographics'] = () => {
  return db.demographic.findMany()
}

export const demographic: QueryResolvers['demographic'] = ({ id }) => {
  return db.demographic.findUnique({
    where: { id },
  })
}

export const demographicByUser: QueryResolvers['demographicByUser'] = ({
  userId,
}) => {
  return db.demographic.findUnique({
    where: { userId },
  })
}

export const createDemographic: MutationResolvers['createDemographic'] = ({
  input,
}) => {
  if (input.userId !== context.currentUser.id) {
    throw new ForbiddenError('User id')
  } else {
    return db.demographic.create({
      data: input,
    })
  }
}

export const updateDemographic: MutationResolvers['updateDemographic'] =
  async ({ id, input }) => {
    const previous = await db.demographic.findUnique({
      where: { id },
    })

    if (previous.userId !== context.currentUser.id) {
      throw new ForbiddenError('User id')
    } else {
      return db.demographic.update({
        data: input,
        where: { id },
      })
    }
  }

export const Demographic: DemographicRelationResolvers = {
  user: (_obj, { root }) => {
    return db.demographic.findUnique({ where: { id: root?.id } }).user()
  },
}
