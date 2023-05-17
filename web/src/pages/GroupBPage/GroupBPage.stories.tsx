import type { ComponentMeta } from '@storybook/react'

import GroupBPage from './GroupBPage'

export const generated = () => {
  return <GroupBPage />
}

export default {
  title: 'Pages/GroupBPage',
  component: GroupBPage,
} as ComponentMeta<typeof GroupBPage>
