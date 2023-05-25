// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={NavigationLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/group-a" page={GroupAPage} name="groupA" />
        <Route path="/group-b" page={GroupBPage} name="groupB" />
        <Route path="/customer-satisfaction" page={CustomerSatisfactionPage} name="customerSatisfaction" />
        <Private unauthenticated="signup">
          <Route path="/group-a" page={GroupAPage} name="groupA" />
          <Route path="/group-b" page={GroupBPage} name="groupB" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
