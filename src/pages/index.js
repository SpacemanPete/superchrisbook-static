import React from 'react'
import Hero from '../components/Hero'
import BuyBook from '../components/BuyBook'
import AboutPreview from '../components/AboutPreview'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Script from 'react-load-script'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="homepage">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js" onLoad={this.handleScriptLoad.bind(this)}
        />
        <Hero />
        <AboutPreview />
        <BuyBook />
      </div>
    );
  }
}

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//             path
//           }
//         }
//       }
//     }
//   }
// `;
