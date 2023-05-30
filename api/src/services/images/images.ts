import type { QueryResolvers, ImageRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const images: QueryResolvers['images'] = () => {
  return db.image.findMany()
}

export const image: QueryResolvers['image'] = ({ id }) => {
  return db.image.findUnique({
    where: { id },
  })
}

export const imageByImageNumber: QueryResolvers['imageByImageNumber'] = ({
  imageNumber,
}) => {
  return db.image.findUnique({
    where: { imageNumber },
  })
}

export const Image: ImageRelationResolvers = {
  ImageSurvey: (_obj, { root }) => {
    return db.image.findUnique({ where: { id: root?.id } }).ImageSurvey()
  },
}
