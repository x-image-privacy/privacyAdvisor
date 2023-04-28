import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GroupBPage = () => {
  return (
    <>
      <MetaTags title="GroupB" description="GroupB page" />

      <h1>GroupBPage</h1>
      <p>
        Find me in <code>./web/src/pages/GroupBPage/GroupBPage.tsx</code>
      </p>
      <p>
        My default route is named <code>groupB</code>, link to me with `
        <Link to={routes.groupB()}>GroupB</Link>`
      </p>
    </>
  )
}

export default GroupBPage
