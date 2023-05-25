import { Button, Stack, StackDivider } from '@chakra-ui/react'

import {
  FindImageSurveyByUserAndImageIdImage,
  UpdateImageSurveyMutation,
  UpdateImageSurveyMutationVariables,
} from 'types/graphql'

import {
  IS_PRIVATE_QUESTION_GROUP_A,
  PRIVATE_ELEMENTS_QUESTION_GROUP_A,
  PUBLIC_ELEMENTS_QUESTION_GROUP_A,
} from 'web/config/constants'

import { Form, SubmitHandler } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

type ImageSurveyProps = {
  imageId: number
  userId: number
  onFinished?: () => void
  onPrevious?: () => void
}

export const QUERY = gql`
  query FindImageSurveyByUserAndImageIdImage($userId: Int!, $imageId: Int!) {
    imageSurvey: imageSurveyByUserAndImage(userId: $userId, imageId: $imageId) {
      id
      user {
        id
        group
      }
      image {
        id
      }
      privateRank
      privateElem
      publicElem
    }
  }
`

const CREATE_IMAGE_SURVEY = gql`
  mutation CreateImageSurveyMutation($input: CreateImageSurveyInput!) {
    createImageSurvey(input: $input) {
      id
      privateRank
      privateElem
      publicElem
    }
  }
`
const UPDATE_IMAGE_SURVEY = gql`
  mutation UpdateImageSurveyMutation(
    $id: Int!
    $input: UpdateImageSurveyInput!
  ) {
    updateImageSurvey(id: $id, input: $input) {
      id
      userId
      imageId
      privateRank
      publicElem
      privateElem
    }
  }
`

interface PlainImageSurveyValues {
  [IS_PRIVATE_QUESTION_GROUP_A]: string
  [PUBLIC_ELEMENTS_QUESTION_GROUP_A]: string
  [PRIVATE_ELEMENTS_QUESTION_GROUP_A]: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = (props: ImageSurveyProps) => (
  <ImageSurveyComponent {...props} />
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindImageSurveyByUserAndImageIdImage> & ImageSurveyProps
) => <ImageSurveyComponent {...props} />

const ImageSurveyComponent = ({
  imageSurvey,
  userId,
  imageId,
  onPrevious,
  onFinished,
}: FindImageSurveyByUserAndImageIdImage & ImageSurveyProps) => {
  const [create] = useMutation(CREATE_IMAGE_SURVEY)
  const [update] = useMutation<
    UpdateImageSurveyMutation,
    UpdateImageSurveyMutationVariables
  >(UPDATE_IMAGE_SURVEY)

  const onSubmit: SubmitHandler<PlainImageSurveyValues> = (data) => {
    const privateRank = parseInt(data[IS_PRIVATE_QUESTION_GROUP_A])
    if (imageSurvey && imageSurvey.id) {
      update({
        variables: {
          id: imageSurvey.id,
          input: {
            privateRank: privateRank,
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_A],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_A],
          },
        },
      })
    } else {
      create({
        variables: {
          input: {
            userId,
            imageId,
            hasInterface: false,
            privateRank: privateRank,
            privateElem: data[PRIVATE_ELEMENTS_QUESTION_GROUP_A],
            publicElem: data[PUBLIC_ELEMENTS_QUESTION_GROUP_A],
          },
        },
      })
    }
    onFinished?.()
  }
  return (
    <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="start"
        divider={<StackDivider borderColor="grayIcon" />}
      >
        {/* // todo: overwrite the  */}
        <Button onClick={onPrevious}>Previous</Button>
        <LikertScaleQuestionField
          name={IS_PRIVATE_QUESTION_GROUP_A}
          n={5}
          question="Is this image private?"
          leftHand="No"
          rightHand="Yes"
          direction="row"
          value={imageSurvey?.privateRank.toString() || ''}
          validation={{ required: true }}
        />
        <OpenEndedQuestionField
          question="Which elements do you consider as public in this image?"
          name={PUBLIC_ELEMENTS_QUESTION_GROUP_A}
          placeholder="Answer here..."
          value={imageSurvey?.publicElem || ''}
          validation={{ required: true }}
        />
        <OpenEndedQuestionField
          question="Which elements would you feel uncomfortable disclosing in this image?"
          name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
          placeholder="Answer here..."
          value={imageSurvey?.privateElem || ''}
          validation={{ required: true }}
        />
        <Button type="submit">Next</Button>
      </Stack>
    </Form>
  )
}
