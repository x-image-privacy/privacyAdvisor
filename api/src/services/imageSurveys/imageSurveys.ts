import type {
  QueryResolvers,
  MutationResolvers,
  ImageSurveyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const imageSurveys: QueryResolvers['imageSurveys'] = () => {
  return db.imageSurvey.findMany()
}

export const imageSurvey: QueryResolvers['imageSurvey'] = ({ id }) => {
  return db.imageSurvey.findUnique({
    where: { id },
  })
}

export const imageSurveyByUserAndImage: QueryResolvers['imageSurveyByUserAndImage'] =
  ({ userId, imageId }) => {
    return db.imageSurvey.findFirst({
      where: { userId, imageId },
    })
  }

export const createImageSurvey: MutationResolvers['createImageSurvey'] = ({
  input,
}) => {
  return db.imageSurvey.create({
    data: input,
  })
}

export const updateImageSurvey: MutationResolvers['updateImageSurvey'] = ({
  id,
  input,
}) => {
  return db.imageSurvey.update({
    data: input,
    where: { id },
  })
}

export const deleteImageSurvey: MutationResolvers['deleteImageSurvey'] = ({
  id,
}) => {
  return db.imageSurvey.delete({
    where: { id },
  })
}

export const ImageSurvey: ImageSurveyRelationResolvers = {
  user: (_obj, { root }) => {
    return db.imageSurvey.findUnique({ where: { id: root?.id } }).user()
  },
  image: (_obj, { root }) => {
    return db.imageSurvey.findUnique({ where: { id: root?.id } }).image()
  },
}
