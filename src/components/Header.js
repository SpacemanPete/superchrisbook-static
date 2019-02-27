import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TODO: Configure Header markup with Logo image, Links & Shopping cart Icon 

const Header = ({ siteTitle }) => (
  <header>
    <div id="site-logo">
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="menu">
      <Link to="/story">Chris' Story</Link>
      <a href="#purchase" className="purchase">Buy the book!</a>
      <a href="#shopping-cart" className="shopping-cart">Shopping-cart</a>
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
