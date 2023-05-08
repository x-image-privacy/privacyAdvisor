// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import NavigationLayout from './layouts/NavigationLayout/NavigationLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavigationLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/group-a" page={GroupAPage} name="groupA" />
        <Route path="/group-b" page={GroupBPage} name="groupB" />
        <Route path="/group-b-global-question" page={GroupBGlobalQuestionPage} name="groupBGlobalQuestion" />
        <Route path="/csat" page={CSATPage} name="csat" />
        <Route path="/nps" page={NPSPage} name="nps" />
        <Route path="/ueq" page={UEQPage} name="ueq" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
