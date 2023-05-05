import type { ComponentMeta } from '@storybook/react'

import CsatPage from './CsatPage'

export const generated = () => {
  return <CsatPage />
}

export default {
  title: 'Pages/CsatPage',
  component: CsatPage,
} as ComponentMeta<typeof CsatPage>
