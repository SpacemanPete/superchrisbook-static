import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"

import Product from './Product'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeaturedProduct = () => {
  const FeaturedProductQuery = useStaticQuery(graphql`
    query FeaturedProductQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "product" }, featured: { eq: true } }) {
        frontmatter {
          id
          featured
          title
          image {
          ...galleryImage
          }
          price
          slug
          description
        }
      }
    }
  `)

  const productInfo = FeaturedProductQuery.markdownRemark.frontmatter

  console.log('productInfo', productInfo);
  

  return (
    <section id={ productInfo.id }>
      <div className='container section'>
        <PreviewCompatibleImage imageInfo={productInfo.image } />        
        <Product productInfo={ productInfo } />
      </div>
    </section>
  )
}

export default FeaturedProduct