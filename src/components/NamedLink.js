import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import {namedLinks} from '~/utils/queries'
import {Link} from '.'

export const NamedLink = ({name, ...props}) => (
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
    }) => {
      const href = namedLinks(links)[name]

      // This violates Singel Rule #2: Never break the app, but I think
      // that's okay because this is a static site and we don't want to
      // render with bad links.
      if (!href) {
        throw new Error(`No link named ${name}`)
      }

      return <Link href={href} {...props} />
    }}
  />
)

NamedLink.displayName = 'NamedLink'

NamedLink.propTypes = {
  name: PropTypes.string.isRequired,
}
