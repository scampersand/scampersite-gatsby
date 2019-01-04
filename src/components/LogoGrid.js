import _ from 'lodash'
import {StaticQuery, graphql} from 'gatsby'
import React from 'react'

import {imageNodes} from '../utils/queries'
import ImageGrid from './ImageGrid'

const LogoGrid = () => (
  <StaticQuery
    query={LOGO_QUERY}
    render={({images}) => (
      <ImageGrid
        images={_.sortBy(imageNodes(images), 'name')}
        order={LOGO_ORDER}
        columns={[2, 4]}
        gutter={2}
        rowGutter={3}
        aspect={2.5}
      />
    )}
  />
)

const LOGO_ORDER = [
  // mobile
  {appsembler: -1, ripul: 1},
  // desktop
  {'princeton-university-press': -1, '18f': 1},
]

const LOGO_QUERY = graphql`
  fragment logoImage on File {
    childImageSharp {
      fluid(maxWidth: 512, toFormat: PNG) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  fragment logoImages on FileConnection {
    edges {
      node {
        name
        publicURL
        ...logoImage
      }
    }
  }
  query LogoQuery {
    images: allFile(filter: {relativeDirectory: {eq: "clients"}}) {
      ...logoImages
    }
  }
`

export default LogoGrid
