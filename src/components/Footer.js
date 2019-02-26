import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TODO: Configure Footer markup with Links, attributeion & copyright

const Footer = ({ siteTitle }) => (
  <Footer>
    <div>
      <Link to="/" >
        MPSSociety.org
      </Link>
      <Link to="/" >
        Buy the book
      </Link>
      <div>Copyright and stuff</div>
    </div>
  </Footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
