import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TODO: Configure Header markup with Logo image, Links & Shopping cart Icon 

const Header = ({ siteTitle }) => (
  // <header>
  //   <div id="site-logo">
  //     <h1>
  //       <Link to="/" >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  //   <div className="menu">
  //     <Link to="/story">Chris' Story</Link>
  //     <a href="#purchase" className="purchase">Buy the book!</a>
  //     <a href="#shopping-cart" className="shopping-cart">Shopping-cart</a>
  //   </div>
  // </header>
  <header>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <figure className="image">
              <img src="./img/logo.png" alt="Superchris" />
            </figure>
          </a>
        </div>
        <ul className="navbar-end">
          <li>
            <Link to="/story">Chris' Story</Link>
          </li>
          <li>
            <a className="navbar-item" href='#purchase'>Buy the book!</a>
          </li>
          <li>
            <a href="#shopping-cart" className="shopping-cart">Shopping cart</a>
          </li>
        </ul>
      </div>
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
