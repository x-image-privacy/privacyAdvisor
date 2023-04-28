import type { ComponentMeta } from '@storybook/react'

import GroupBGlobalQuestionPage from './GroupBGlobalQuestionPage'

export const generated = () => {
  return <GroupBGlobalQuestionPage />
}

export default {
  title: 'Pages/GroupBGlobalQuestionPage',
  component: GroupBGlobalQuestionPage,
} as ComponentMeta<typeof GroupBGlobalQuestionPage>
