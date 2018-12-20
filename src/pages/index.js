import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Landing from '../components/layouts/landing'
import SEO from '../components/seo'

const IndexPage = () => (
  <Landing>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <section class="content">
      <div class="container">
        <div class="content-main">
          <h1>
            We work with startups and organizations to build the right thing at
            the right time.
          </h1>
        </div>
        <ul class="list-inline generous">
          <li>
            <a href="mailto:hello@scampersand.com" class="t-bold t-underline">
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
)

export default IndexPage
