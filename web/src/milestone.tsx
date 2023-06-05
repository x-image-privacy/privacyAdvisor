import {
  MILESTONE_END,
  MILESTONE_GROUP_A,
  MILESTONE_GROUP_B,
  MILESTONE_SURVEY,
  PAGE_END,
  PAGE_GROUP_A,
  PAGE_GROUP_B,
  PAGE_SURVEY,
} from 'web/config/constants'

import { navigate, routes } from '@redwoodjs/router'

export const isMilestone = (page: string, milestone: string) => {
  if (page == PAGE_GROUP_A) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        break
      case MILESTONE_GROUP_B:
        navigate(routes.groupB(), { replace: true })
        break
      case MILESTONE_SURVEY:
        navigate(routes.customerSatisfaction(), { replace: true })
        break
      case MILESTONE_END:
        navigate(routes.endSurvey(), { replace: true })
        break
      default:
        break
    }
  } else if (page == PAGE_GROUP_B) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        navigate(routes.groupA(), { replace: true })
        break
      case MILESTONE_GROUP_B:
        break
      case MILESTONE_SURVEY:
        navigate(routes.customerSatisfaction(), { replace: true })
        break
      case MILESTONE_END:
        navigate(routes.endSurvey(), { replace: true })
        break
      default:
        break
    }
  } else if (page == PAGE_SURVEY) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        navigate(routes.groupA(), { replace: true })
        break
      case MILESTONE_GROUP_B:
        navigate(routes.groupB(), { replace: true })
        break
      case MILESTONE_SURVEY:
        break
      case MILESTONE_END:
        navigate(routes.endSurvey(), { replace: true })
        break
      default:
        break
    }
  } else if (page == PAGE_END) {
    switch (milestone) {
      case MILESTONE_GROUP_A:
        navigate(routes.groupA(), { replace: true })
        break
      case MILESTONE_GROUP_B:
        navigate(routes.groupB(), { replace: true })
        break
      case MILESTONE_SURVEY:
        navigate(routes.customerSatisfaction(), { replace: true })
        break
      case MILESTONE_END:
        break
      default:
        break
    }
  } else {
    navigate(routes.home(), { replace: true })
  }
}
