import type { ImageSurveyQuery } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, MetaTags } from '@redwoodjs/web'
import LikertScaleQuestionField from '../LikertScaleQuestionField/LikertScaleQuestionField'
import { Stack, StackDivider } from '@chakra-ui/react'
import { IS_PRIVATE_QUESTION_GROUP_A, PRIVATE_ELEMENTS_QUESTION_GROUP_A, PUBLIC_ELEMENTS_QUESTION_GROUP_A } from 'web/config/constants'
import { Submit } from '@redwoodjs/forms'
import OpenEndedQuestionField from '../OpenEndedQuestionField/OpenEndedQuestionField'

export const QUERY = gql`
  query ImageSurveyQuery($id: Int!) {
    imageSurvey: privateRank(id: $id) {
      id
      userId
      rank
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  imageSurvey,
}: CellSuccessProps<ImageSurveyQuery>) => {
      return (
        <Stack
            direction="row"
            spacing={4}
            justifyContent="start"
            divider={<StackDivider borderColor="grayIcon" />}
          >
            <LikertScaleQuestionField
              name={IS_PRIVATE_QUESTION_GROUP_A}
              n={5}
              question="Is this image private?"
              leftHand="No"
              rightHand="Yes"
              direction='row'
            />
            <OpenEndedQuestionField
              question="Which elements do you consider as public in this image?"
              name={PUBLIC_ELEMENTS_QUESTION_GROUP_A}
              placeholder="Answer here..."
            />
            <OpenEndedQuestionField
              question="Which elements would you feel uncomfortable disclosing in this image?"
              name={PRIVATE_ELEMENTS_QUESTION_GROUP_A}
              placeholder="Answer here..."
            />
            <Submit className="button" color="grayIcon">
              Save
            </Submit>
          </Stack>

      )

}
