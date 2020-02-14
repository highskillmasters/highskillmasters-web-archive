import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__title">High Skill Masters</h1>
      <div className="header__menu">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/meetup">Meetups</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
