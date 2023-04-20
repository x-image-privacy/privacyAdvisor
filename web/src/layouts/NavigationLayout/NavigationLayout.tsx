type NavigationLayoutProps = {
  children?: React.ReactNode
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <>
      <header>
        <h1>Privacy header</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NavigationLayout
