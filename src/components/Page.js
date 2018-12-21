import React from 'react'
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Container from './Container'
import InlineList from './InlineList'
import SEO from './SEO'

const Header = () => (
  <header>
    <a
      href="/"
      css={{
        color: 'inherit',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      Scampersand
    </a>
  </header>
)

const Main = ({children}) => <main role="main">{children}</main>

const Footer = () => (
  <footer>
    <InlineList>
      <a href="https://twitter.com/scampersandco">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/scampersand">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/company/scampersand">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </InlineList>
  </footer>
)

const Page = ({children, keywords, title}) => (
  <>
    <SEO title={title} keywords={keywords} />
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default Page
