import React from "react"

import "./footer.css"
import { Link } from "gatsby"

const Footer = () => (
  <div className="footer">
    <p>
      Copyright © {new Date().getFullYear()} High Skill Masters. All rights
      reserved.
    </p>
    <p>
      <Link to="/" className="footer__link">
        Home
      </Link>
      <Link to="/blog" className="footer__link">
        Blog
      </Link>
      <Link to="/meetup" className="footer__link">
        Meetups
      </Link>
      <Link to="/about" className="footer__link">
        About
      </Link>
    </p>
  </div>
)

export default Footer
