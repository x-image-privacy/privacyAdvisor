import type { ComponentMeta } from '@storybook/react'

import NpsPage from './NpsPage'

export const generated = () => {
  return <NpsPage />
}

export default {
  title: 'Pages/NpsPage',
  component: NpsPage,
} as ComponentMeta<typeof NpsPage>
