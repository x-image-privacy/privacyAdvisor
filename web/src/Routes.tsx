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

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={NavigationLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Private unauthenticated="signup">
          <Route path="/group-a" page={GroupAPage} name="groupA" />
          <Route path="/group-b" page={GroupBPage} name="groupB" />
          <Route path="/group-b-global-question" page={GroupBGlobalQuestionPage} name="groupBGlobalQuestion" />
          <Route path="/csat" page={CustomerSatPage} name="csat" />
          <Route path="/nps" page={NetPromoterScorePage} name="nps" />
          <Route path="/ueq" page={UserExperienceQuestionnairePage} name="ueq" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
