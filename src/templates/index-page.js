import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from '../components/Container'
import GraphQLErrorList from '../components/Graphql-error-list'

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
      }
    }

    indexPage: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        templateKey
        heading
        subheading
        about_section_heading
        aboutSectionDescription
        aboutSectionButton
      }
    }
  }
`

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// };

const IndexPage = props => {

  const { data, errors } = props
  const site = data && data.site
  const indexPage = data && data.indexPage

  // const { frontmatter } = data.markdownRemark;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} keywords={site.siteMetadata.keywords} />

      <div>This is the indexpage</div>
    </Layout>
  )
}

export default IndexPage