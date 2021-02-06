import Navbar from './Navbar'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export default Layout
