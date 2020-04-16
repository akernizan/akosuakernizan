import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav>
    <Link to="/" activeClassName="active">About</Link>
    <Link to="/resume" activeClassName="active">Resume</Link>
    <Link to="/contact" activeClassName="active">Contact</Link>
    <a href="https://tech-blog.netlify.com/" target="_blank" rel="noopener noreferrer">Blog</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
