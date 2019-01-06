import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

import {namedLinks} from '~/utils/queries'

const Link = ({name, href, children}) => (
  <StaticQuery
    query={LINKS_QUERY}
    render={({site: {siteMetadata: {links}}}) => {
      const hrefs = namedLinks(links)
      return (
        <a href={href || hrefs[name]}>{children}</a>
      )
    }}
  />
)

Link.displayName = 'Link'

Link.propTypes = {
  name: (props, propName, componentName) => {
    if (!props.name && !props.href) {
      return new Error(`One of props 'name' or 'href' must be supplied to ${componentName}`)
    }
  },
}

const LINKS_QUERY = graphql`
  query LinksQuery {
    site {
      siteMetadata {
        links {
          name
          href
        }
      }
    }
  }
`

export default Link
