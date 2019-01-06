import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

/**
 * gatsby-image provides Img which generates a wrapper and applies style
 * (wrapper) and imgStyle (wrapped img tag). But Img only works with the
 * result of the fluid/fixed GraphQL queries. For SVG we need an
 * alternative that generates similar markup but handles a simple src prop.
 */
const NonImg = ({image, style, imgStyle, className}) => (
  <div
    css={{
      ...style,
    }}
    className={className}
  >
    <img
      alt={image.name}
      src={image.publicURL}
      css={{
        maxWidth: '100%',
        height: 'auto',
        ...imgStyle,
      }}
    />
  </div>
)

NonImg.displayName = 'NonImg'

NonImg.propTypes = {
  image: PropTypes.object.isRequired,
  style: PropTypes.object,
  imgStyle: PropTypes.object,
  className: PropTypes.string,
}

export const Image = ({image, ...props}) => {
  if (image.childImageSharp && image.childImageSharp.fluid) {
    return <Img fluid={image.childImageSharp.fluid} {...props} />
  } else if (image.childImageSharp && image.childImageSharp.fixed) {
    return <Img fixed={image.childImageSharp.fixed} {...props} />
  }
  return <NonImg image={image} {...props} />
}

Image.displayName = 'Image'

export default Image
