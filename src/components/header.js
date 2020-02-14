import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <Link to="/" className="header__title">
        High Skill Masters
      </Link>
      <div className="header__menu">
        <Link to="/blog">Blog</Link>
        <Link to="/meetup">Meetups</Link>
        <Link to="/contact">Contact</Link>
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
