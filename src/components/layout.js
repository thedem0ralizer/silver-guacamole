import * as React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Link to={"mortgage-calc"}>here
      </Link>
      <main>{children}</main>
      <footer>
        <Bio />
        <center>© {new Date().getFullYear()}</center>
      </footer>
    </div>
  )
}

export default Layout
