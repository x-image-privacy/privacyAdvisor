import type {
  QueryResolvers,
  MutationResolvers,
  PrivateRankRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const privateRanks: QueryResolvers['privateRanks'] = () => {
  return db.privateRank.findMany()
}

export const privateRank: QueryResolvers['privateRank'] = ({ id }) => {
  return db.privateRank.findUnique({
    where: { id },
  })
}

export const createPrivateRank: MutationResolvers['createPrivateRank'] = ({
  input,
}) => {
  return db.privateRank.create({
    data: input,
  })
}

export const updatePrivateRank: MutationResolvers['updatePrivateRank'] = ({
  id,
  input,
}) => {
  return db.privateRank.update({
    data: input,
    where: { id },
  })
}

export const deletePrivateRank: MutationResolvers['deletePrivateRank'] = ({
  id,
}) => {
  return db.privateRank.delete({
    where: { id },
  })
}

export const PrivateRank: PrivateRankRelationResolvers = {
  user: (_obj, { root }) => {
    return db.privateRank.findUnique({ where: { id: root?.id } }).user()
  },
}
