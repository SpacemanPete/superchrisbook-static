import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TODO: Configure Footer markup with Links, attributeion & copyright

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <ul>
      <li>
        <a href='https://mpssociety.org/' className='footer-link'>mpssociety.org</a>
      </li>
      <li>
        <a href='#buy-book' className='footer-link'>Buy the book</a>
      </li>
    </ul>
    <div className='attribution'>
      <span>Site design by <a href='https://www.spacemandev.com'>SpacemanDev</a>.</span>
        <span>Hosting by <a href='https://www.netlify.com'>Netlify.</a></span>
      <span>Copyright&copy;
        <script>document.write(new Date().getFullYear())</script>
      </span>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
