import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '.'

/**
 * gatsby-image provides Img which generates a wrapper and applies style
 * (wrapper) and imgStyle (wrapped img tag). But Img only works with the
 * result of the fluid/fixed GraphQL queries. For SVG we need an
 * alternative that generates similar markup but handles a simple src prop.
 */
export const SimpleImg = ({css, image, imgStyle, style, ...props}) => (
  <Box
    css={[
      {
        img: {
          maxWidth: '100%',
          height: 'auto',
          ...imgStyle,
        },
      },
      style,
      css,
    ]}
    {...props}
  >
    <img
      alt={image.name}
      src={image.publicURL}
    />
  </Box>
)

SimpleImg.displayName = 'SimpleImg'

SimpleImg.propTypes = {
  image: PropTypes.object.isRequired,
  style: PropTypes.object,
  imgStyle: PropTypes.object,
}
