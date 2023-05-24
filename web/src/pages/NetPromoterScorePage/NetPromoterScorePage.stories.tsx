import type { ComponentMeta } from '@storybook/react'

import NetPromoterScorePage from './NetPromoterScorePage'

export const generated = () => {
  return <NetPromoterScorePage />
}

export default {
  title: 'Pages/NpsPage',
  component: NetPromoterScorePage,
} as ComponentMeta<typeof NetPromoterScorePage>
