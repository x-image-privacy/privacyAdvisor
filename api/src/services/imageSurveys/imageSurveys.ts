import type {
  QueryResolvers,
  MutationResolvers,
  ImageSurveyRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

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

export const imageSurveyByUserImageAndHasInterface: QueryResolvers['imageSurveyByUserImageAndHasInterface'] =
  ({ userId, imageId, hasInterface }) => {
    return db.imageSurvey.findFirst({
      where: { userId, imageId, hasInterface },
    })
  }

export const createImageSurvey: MutationResolvers['createImageSurvey'] = ({
  input,
}) => {
  if (input.userId !== context.currentUser.id) {
    throw new ForbiddenError('User id can only update itself')
  } else {
    return db.imageSurvey.create({
      data: input,
    })
  }
}

export const updateImageSurvey: MutationResolvers['updateImageSurvey'] =
  async ({ id, input }) => {
    const previous = await db.imageSurvey.findUnique({
      where: { id },
    })

    if (previous.userId !== context.currentUser.id) {
      throw new ForbiddenError('User id can only update itself')
    } else {
      return db.imageSurvey.update({
        data: input,
        where: { id },
      })
    }
  }

export const ImageSurvey: ImageSurveyRelationResolvers = {
  user: (_obj, { root }) => {
    return db.imageSurvey.findUnique({ where: { id: root?.id } }).user()
  },
  image: (_obj, { root }) => {
    return db.imageSurvey.findUnique({ where: { id: root?.id } }).image()
  },
}
