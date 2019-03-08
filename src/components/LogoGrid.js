import fp from 'lodash/fp'
import {StaticQuery, graphql} from 'gatsby'
import React from 'react'
import {imageNodes} from '~/utils/queries'
import {ImageGrid} from '.'
import theme from '~/theme'

const mapWithIndex = fp.map.convert({cap: false})

const flexOrder = fp.pipe(
  mapWithIndex((v, i, arr) => [v, -(arr.length - i)]),
  fp.fromPairs,
)

const LOGO_ORDER = fp.mapValues(flexOrder, {
  phone: [
    '18f',
    'abc-clio',
    'appsembler',
    'princeton-university-press',
    'ada',
    'ripul',
    'tizra',
    'gw',
  ],
  ipadp: [
    'tizra',
    'gw',
    'ada',
    'abc-clio',
    'ripul',
    'princeton-university-press',
    '18f',
    'appsembler',
  ],
})

export const LogoGrid = props => (
  <StaticQuery
    query={LOGO_QUERY}
    render={({images}) => {
      return (
        <ImageGrid
          images={fp.sortBy('name', imageNodes(images))}
          linked
          order={LOGO_ORDER}
          columns={{phone: 2, ipadp: 4}}
          aspect={2}
          gutter={'0.5rem'}
          rowGutter={'0.5rem'}
          colProps={{
            px: '0.5rem',
            py: '1rem',
            css: {backgroundColor: theme.colors.logoBg},
          }}
          imageProps={{imgStyle: {opacity: '0.8'}}}
          {...props}
        />
      )
    }}
  />
)

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
