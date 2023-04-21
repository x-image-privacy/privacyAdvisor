import type { ComponentMeta } from '@storybook/react'

import GroupAPage from './GroupAPage'

export const generated = () => {
  return <GroupAPage />
}

export default {
  title: 'Pages/GroupAPage',
  component: GroupAPage,
} as ComponentMeta<typeof GroupAPage>
