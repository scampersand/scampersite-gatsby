import _ from 'lodash'
import {StaticQuery, graphql} from 'gatsby'
import React from 'react'

import {imageNodes, namedLinks} from '../utils/queries'
import ImageGrid from './ImageGrid'

const LogoGrid = () => (
  <StaticQuery
    query={LOGO_QUERY}
    render={({images, site: {siteMetadata: {links}}}) => {
      const hrefs = namedLinks(links)
      return (
        <ImageGrid
          images={_.sortBy(imageNodes(images), 'name')}
          hrefs={hrefs}
          order={LOGO_ORDER}
          columns={[2, 4]}
          gutter={2}
          rowGutter={3}
          aspect={2.5}
        />
      )
    }}
  />
)

const LOGO_ORDER = [
  // mobile
  [
    '18f',
    'abc-clio',
    'appsembler',
    'princeton-university-press',
    'ada',
    'ripul',
    'tizra',
    'gw',
  ].reduce((o, s, i) => Object.assign(o, {[s]: i - 42}), {}),
  // desktop
  [
    'tizra',
    'gw',
    'ada',
    'abc-clio',
    'ripul',
    'princeton-university-press',
    '18f',
    'appsembler',
  ].reduce((o, s, i) => Object.assign(o, {[s]: i - 42}), {}),
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
    site {
      siteMetadata {
        links {
          name
          href
        }
      }
    }
    images: allFile(filter: {relativeDirectory: {eq: "clients"}}) {
      ...logoImages
    }
  }
`

export default LogoGrid
