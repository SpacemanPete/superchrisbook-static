import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import GraphQLErrorList from '../components/Graphql-error-list'
import SEO from '../components/Seo'
import FeaturedProduct from '../components/FeaturedProduct'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

// data query 
export const StoryPageQuery = graphql`
  query StoryPageTemplate {
    site {
      siteMetadata {
        title
      }
    }

    storyPage: markdownRemark(frontmatter: { templateKey: { eq: "story-page" } }) {
      frontmatter {
        storyImages {
          image {
            ...galleryImage
          }
          caption
        }
        copySection {
          title
          description
        }
      }
    }
  }
`

// define component
const StoryPage = props => {

  const { data, errors } = props
  const site = data && data.site
  const storyPage = data && data.storyPage
  const { frontmatter } = data.storyPage

  console.log("props", props);
  

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

      {/* Slider section */}
      <section id="about">
        <div className='container section'>
          <div id='siema-slider'>
            <h1 className='title'>SUPER CHRIS!</h1>
            <div className="siema">
              <div className="siema-slide">
                <img src='./img/optimized/super_chris_overlooking_the_city-min.jpg' alt='SUPERCHRIS overlooking the city' />
                <div className='caption'>Here’s the story of a boy, who never wore a frown. His smile lights up the city, like a King’s blinged out crown.</div>
              </div>
              <div className="siema-slide">
                <img src='./img/optimized/Chris_smiling_green_striped_shirt-min.jpg' alt='Chris smiling in a green-striped shirt' />
                <div className='caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente ducimus. Qui necessitatibus earum atque. </div>
              </div>
              <div className="siema-slide">
                <img src='./img/optimized/Chris_Curly_Hair-min.jpg' alt='Chris with curly hair' />
                <div className='caption'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur aspernatur accusamus placeat ex velit.</div>
              </div>
              <div className="siema-slide">
                <img src='./img/optimized/Chris_riding_in_shopping_cart-min.jpg' alt='Chris riding in a shopping cart' />
                <div className='caption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium voluptatem dolore. Dolorem, porro cum.</div>
              </div>
            </div>
            <button className="prev">PREV</button>
            <button className="next">NEXT</button>
          </div>
        </div>
      </section>

      {/* About Hurler's Syndrome Section */}
      <section id='story'>
        <div className='container section'>
          <div id='about' className='box blue'>
            <h2>About the book</h2>
            <div className='text'>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div id='how-to-help' className='box red'>
            <h2>How you can help</h2>
            <div className='text'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div id='syndrome' className='box orange'>
            <h2>Hurler's Syndrome</h2>
            <div className='text'>
                <p>Also known as MPS, is a rare disease in which a person cannot break down certain types of sugar molecules found throughout the body.</p>
                <p>It can affect bones, heart, eyes and joints and is treated using enzyme replacement therapy.</p>
                <p>It does not affect a person’s smile, spirit or hope, as evidenced by Christopher Hohn (also known as Super Chris).</p>
                <p>Please visit mpssociety.org for more information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      {/* if graphql data has a featured product then load component */}
      <FeaturedProduct />

    </Layout>
  )
}

export default StoryPage