// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Set wrap={NavigationLayout}>
        <Route path="/" page={HomePage} name="home" /> 
        <Private unauthenticated="signup">
          <Route path="/group-a" page={GroupAPage} name="groupA" />
          <Route path="/group-b" page={GroupBPage} name="groupB" />
          <Route path="/survey" page={CustomerSatisfactionPage} name="customerSatisfaction" />
          <Route path="/end-survey" page={EndSurveyPage} name="endSurvey" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
