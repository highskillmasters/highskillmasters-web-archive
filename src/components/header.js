import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__title">High Skill Masters</h1>
      <div className="header__menu">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Meetups</a>
        <a href="#">About</a>
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
