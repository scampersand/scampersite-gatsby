import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Landing from '../components/layouts/landing'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Landing title={data.site.siteMetadata.title}>
        <section class="content">
          <div class="container">
            <div class="content-main">
              <h1>{data.site.siteMetadata.description}</h1>
            </div>
            <ul class="list-inline generous">
              <li>
                <a
                  href="mailto:hello@scampersand.com"
                  class="t-bold t-underline"
                >
                  hello@scampersand.com
                </a>
              </li>
              <li>
                <ul class="list-inline">
                  <li>
                    <a href="https://twitter.com/scampersandco">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/scampersand">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/scampersand">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </Landing>
    )}
  />
)

export default IndexPage
