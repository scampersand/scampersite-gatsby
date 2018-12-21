import React from 'react'
import Img from 'gatsby-image'

const FluidImg = ({image}) => (
  <img alt={image.name} src={image.publicURL} css={{maxWidth: '100%', height: 'auto'}} />
)

const Image = ({image}) => {
  if (image.childImageSharp && image.childImageSharp.fluid) {
    return <Img fluid={image.childImageSharp.fluid} />
  } else if (image.childImageSharp && image.childImageSharp.fixed) {
    return <Img fixed={image.childImageSharp.fixed} />
  }
  return <FluidImg image={image} />
}

export default Image
