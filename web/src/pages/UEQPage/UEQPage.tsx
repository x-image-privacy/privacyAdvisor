import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UeqPage = () => {
  return (
    <>
      <MetaTags title="Ueq" description="Ueq page" />

      <h1>UeqPage</h1>
      <p>
        Find me in <code>./web/src/pages/UEQPage/UEQPage.tsx</code>
      </p>
      <p>
        My default route is named <code>ueq</code>, link to me with `
        <Link to={routes.ueq()}>Ueq</Link>`
      </p>
    </>
  )
}

export default UeqPage
