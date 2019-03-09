import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import {namedLinks} from '~/utils/queries'

export const LinkTo = ({children, href, ...props}) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({
      site: {
        siteMetadata: {links},
      },
    }) => (
      <a href={namedLinks(links)[href] || href} {...props}>
        {children}
      </a>
    )}
  />
)

LinkTo.displayName = 'LinkTo'

LinkTo.propTypes = {
  href: PropTypes.string.isRequired,
}
