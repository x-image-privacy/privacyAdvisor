// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'

const Routes = () => {
  return (
    <Router>
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
        <Route path="/group-a" page={GroupAPage} name="groupA" />
        <Route path="/group-b" page={GroupBPage} name="groupB" />
        <Route path="/csat" page={CSATPage} name="csat" />
        <Route path="/nps" page={NPSPage} name="nps" />
        <Route path="/ueq" page={UEQPage} name="ueq" />
        <Route path="/customer-satisfaction" page={CustomerSatisfactionPage} name="customerSatisfaction" />

      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
