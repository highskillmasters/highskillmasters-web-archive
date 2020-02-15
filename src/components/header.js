import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import "./header.css"
import MenuIcon from "../images/icons/menu.svg"
import CloseIcon from "../images/icons/close.svg"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen(!open)
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__title">
          High Skill Masters
        </Link>
        <MenuIcon className="header__button" onClick={toggleOpen} />
        <div className={classNames("header__menu", { active: open })}>
          <Link to="/blog">Blog</Link>
          <Link to="/meetup">Meetups</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <CloseIcon className="header__close" onClick={toggleOpen} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
