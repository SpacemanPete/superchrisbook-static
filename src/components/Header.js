import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TODO: Configure Header markup with Logo image, Links & Shopping cart Icon 

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
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
