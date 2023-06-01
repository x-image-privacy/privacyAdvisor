import type {
  MutationResolvers,
  QueryResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const updateUser: MutationResolvers['updateUser'] = async ({
  id,
  input,
}) => {
  const previous = await db.user.findUnique({
    where: { id },
  })

  if (previous.id !== context.currentUser.id) {
    throw new ForbiddenError('User id')
  } else {
    return db.user.update({
      data: input,
      where: { id },
    })
  }
}

export const User: UserRelationResolvers = {
  imageSurvey: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).imageSurvey()
  },
  customerSatisfactionSurvey: (_obj, { root }) => {
    return db.user
      .findUnique({ where: { id: root?.id } })
      .customerSatisfactionSurvey()
  },
}
