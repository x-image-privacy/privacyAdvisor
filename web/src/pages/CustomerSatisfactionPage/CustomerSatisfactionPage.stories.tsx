import type { ComponentMeta } from '@storybook/react'

import CustomerSatisfactionPage from './CustomerSatisfactionPage'

export const generated = () => {
  return <CustomerSatisfactionPage />
}

export default {
  title: 'Pages/CustomerSatisfactionPage',
  component: CustomerSatisfactionPage,
} as ComponentMeta<typeof CustomerSatisfactionPage>
