import type { ComponentMeta } from '@storybook/react'

import UeqPage from './UeqPage'

export const generated = () => {
  return <UeqPage />
}

export default {
  title: 'Pages/UeqPage',
  component: UeqPage,
} as ComponentMeta<typeof UeqPage>
