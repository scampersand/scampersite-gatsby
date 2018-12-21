import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'emotion-theming'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import vars from '../variables'
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

const SocialLink = ({href, icon}) => (
  <a css={{color: 'inherit', textDecoration: 'none'}} href={href}>
    <FontAwesomeIcon icon={icon} />
  </a>
)

const Footer = () => (
  <footer>
    <InlineList>
      <SocialLink href="https://twitter.com/scampersandco" icon={faTwitter} />
      <SocialLink href="https://github.com/scampersand" icon={faGithub} />
      <SocialLink
        href="https://www.linkedin.com/company/scampersand"
        icon={faLinkedin}
      />
    </InlineList>
  </footer>
)

const theme = {
  breakpoints: vars.breakpoints,
}

const Page = ({children, keywords, title}) => (
  <ThemeProvider theme={theme}>
    <SEO title={title} keywords={keywords} />
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default Page
