import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import '../styles/main.sass'

const Navbar = () => (
  <header>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Superchris" style={{ width: '160px' }} />
            </figure>
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/story">
          Chris' Story
          </Link>
          <a className="navbar-item" href='/#buy'>Buy the book</a>
        </div>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <ul>
      <li><a href='https://mpssociety.org/' className='footer-link'>mpssociety.org</a></li>
      <li><a href='/#buy' className='footer-link'>Buy the book</a></li>
    </ul>
    <div className='attribution'>
      <span>Site design by <a href='https://www.spacemandev.com'>SpacemanDev</a> and hosting by <a href='https://www.netlify.com'>Netlify</a></span>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
    </div>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="SUPERCHRIS" />
    <Navbar />
    <main>{children()}</main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
