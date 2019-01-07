import React from 'react'
import {GatsbyImg, SimpleImg} from '.'

export const Image = ({image, ...props}) =>
  image.childImageSharp && image.childImageSharp.fluid ? (
    <GatsbyImg fluid={image.childImageSharp.fluid} {...props} />
  ) : image.childImageSharp && image.childImageSharp.fixed ? (
    <GatsbyImg fixed={image.childImageSharp.fixed} {...props} />
  ) : (
    <SimpleImg image={image} {...props} />
  )

Image.displayName = 'Image'
