import { graphql } from 'gatsby'

export const galleryImage = graphql`
  fragment galleryImage on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`