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
        hrefs={LOGO_HREFS}
        order={LOGO_ORDER}
        columns={[2, 4]}
        gutter={2}
        rowGutter={3}
        aspect={2.5}
      />
    )}
  />
)

const LOGO_HREFS = {
  '18f': 'https://18f.gsa.gov',
  'abc-clio': 'https://www.abc-clio.com',
  ada: 'https://www.ada.org/',
  appsembler: 'https://appsembler.com',
  gw: 'https://www.g-w.com',
  'princeton-university-press': 'https://press.princeton.edu',
  ripul: 'http://ripul.org',
  tizra: 'https://www.tizra.com',
}

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
    images: allFile(filter: {relativeDirectory: {eq: "clients"}}) {
      ...logoImages
    }
  }
`

export default LogoGrid
