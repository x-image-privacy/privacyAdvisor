import type {
  QueryResolvers,
  MutationResolvers,
  DemographicRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const demographics: QueryResolvers['demographics'] = () => {
  return db.demographic.findMany()
}

export const demographic: QueryResolvers['demographic'] = ({ id }) => {
  return db.demographic.findUnique({
    where: { id },
  })
}

export const demographicByUser: QueryResolvers['demographicByUser'] = ({ userId }) => {
  return db.demographic.findUnique({
    where: { userId },
  })
}

export const createDemographic: MutationResolvers['createDemographic'] = ({
  input,
}) => {
  return db.demographic.create({
    data: input,
  })
}

export const updateDemographic: MutationResolvers['updateDemographic'] = ({
  id,
  input,
}) => {
  return db.demographic.update({
    data: input,
    where: { id },
  })
}

export const Demographic: DemographicRelationResolvers = {
  user: (_obj, { root }) => {
    return db.demographic.findUnique({ where: { id: root?.id } }).user()
  },
}
