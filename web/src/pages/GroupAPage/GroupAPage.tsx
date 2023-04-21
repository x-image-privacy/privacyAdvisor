import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GroupAPage = () => {
  return (
    <>
      <MetaTags title="GroupA" description="GroupA page" />

      <h1>GroupAPage</h1>
      <p>
        My default route is named <code>groupA</code>, link to me with `
        <Link to={routes.groupA()}>GroupA</Link>`
      </p>
    </>
  )
}

export default GroupAPage
