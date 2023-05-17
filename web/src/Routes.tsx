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
      <Set wrap={ScaffoldLayout} title="PlainImageSurveys" titleTo="plainImageSurveys" buttonLabel="New PlainImageSurvey" buttonTo="newPlainImageSurvey">
        <Route path="/plain-image-surveys/new" page={PlainImageSurveyNewPlainImageSurveyPage} name="newPlainImageSurvey" />
        <Route path="/plain-image-surveys/{id:Int}/edit" page={PlainImageSurveyEditPlainImageSurveyPage} name="editPlainImageSurvey" />
        <Route path="/plain-image-surveys/{id:Int}" page={PlainImageSurveyPlainImageSurveyPage} name="plainImageSurvey" />
        <Route path="/plain-image-surveys" page={PlainImageSurveyPlainImageSurveysPage} name="plainImageSurveys" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Answers" titleTo="answers" buttonLabel="New Answer" buttonTo="newAnswer">
        <Route path="/answers/new" page={AnswerNewAnswerPage} name="newAnswer" />
        <Route path="/answers/{id:Int}/edit" page={AnswerEditAnswerPage} name="editAnswer" />
        <Route path="/answers/{id:Int}" page={AnswerAnswerPage} name="answer" />
        <Route path="/answers" page={AnswerAnswersPage} name="answers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="PrivateRanks" titleTo="privateRanks" buttonLabel="New PrivateRank" buttonTo="newPrivateRank">
        <Route path="/private-ranks/new" page={PrivateRankNewPrivateRankPage} name="newPrivateRank" />
        <Route path="/private-ranks/{id:Int}/edit" page={PrivateRankEditPrivateRankPage} name="editPrivateRank" />
        <Route path="/private-ranks/{id:Int}" page={PrivateRankPrivateRankPage} name="privateRank" />
        <Route path="/private-ranks" page={PrivateRankPrivateRanksPage} name="privateRanks" />
      </Set>
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
