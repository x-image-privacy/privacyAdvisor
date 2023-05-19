import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <p>
        A link to the group A page:
        <Link to={routes.groupA()}>Group a</Link>
      </p>
      <p>
        A link to the group B page:
        <Link to={routes.groupB()}>Group b</Link>
      </p>
      <p>
        A link to the CSAT page:
        <Link to={routes.csat()}>CSAT question</Link>
      </p>
      <p>
        A link to the NPS page:
        <Link to={routes.nps()}>NPS question</Link>
      </p>
      <p>
        A link to the UEQ page:
        <Link to={routes.ueq()}>UEQ question</Link>
      </p>
    </>
  )
}

export default HomePage
