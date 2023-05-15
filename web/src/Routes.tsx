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
      <Set wrap={ScaffoldLayout} title="PrivateRanks" titleTo="privateRanks" buttonLabel="New PrivateRank" buttonTo="newPrivateRank">
        <Route path="/private-ranks/new" page={PrivateRankNewPrivateRankPage} name="newPrivateRank" />
        <Route path="/private-ranks/{id:Int}/edit" page={PrivateRankEditPrivateRankPage} name="editPrivateRank" />
        <Route path="/private-ranks/{id:Int}" page={PrivateRankPrivateRankPage} name="privateRank" />
        <Route path="/private-ranks" page={PrivateRankPrivateRanksPage} name="privateRanks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
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
