import type { ComponentMeta } from '@storybook/react'

import EndSurveyPage from './EndSurveyPage'

export const generated = () => {
  return <EndSurveyPage />
}

export default {
  title: 'Pages/EndSurveyPage',
  component: EndSurveyPage,
} as ComponentMeta<typeof EndSurveyPage>
