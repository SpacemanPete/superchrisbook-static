import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import GraphQLErrorList from '../components/Graphql-error-list'
import SEO from '../components/Seo'
import FeaturedProduct from '../components/FeaturedProduct'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

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
        mainImage: image {
          ...galleryImage
        }
        templateKey
        heading
        subheading
        about_section_heading
        aboutSectionDescription
        aboutSectionImage {
          ...galleryImage
        }
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
  const { frontmatter } = data.indexPage


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

      {/* Hero Section */}
      <section id="hero">
        <div className='container section flex flex-wrap'>
          <div className='img-wrapper'>
            <PreviewCompatibleImage imageInfo={frontmatter.mainImage} />
            {/* <img src="PLACEHOLDER" alt='SUPERCHRIS in a box car' /> */}
          </div>
          <div className='text-wrapper'>
            <h1 className='hero-title'>Super Chris</h1>
            <div className='hero-subtitle lead'>No frowns, all smiles!</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className='container section'>
          <div className='text-wrapper'>
            <h2 className='section-title'>About the book</h2>
            <div className='description'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores labore nisi fugit magnam maiores veritatis repellat et voluptatum nihil, modi cum molestiae ratione inventore velit hic corporis eos aut placeat voluptas? Culpa quam omnis assumenda corrupti commodi laudantium perferendis!</p>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum</p>
            </div>
          </div>
          <div className='image-wrapper'>
            <PreviewCompatibleImage imageInfo={frontmatter.aboutSectionImage} />
            <a href='/dev/story.html' className='caption'><h2>See Chris' Story</h2></a>
          </div>
        </div>
      </section>
      
      {/* Featured Product Section */}
      {/* if graphql data has a featured product then load component */}
      <FeaturedProduct />

    </Layout>
  )
}

export default IndexPage