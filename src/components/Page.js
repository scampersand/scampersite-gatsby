import React from 'react'
import PropTypes from 'prop-types'
import {Global} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import theme from '~/theme'
import {Container, InlineList, NamedLink, SEO} from '.'

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

const SocialLink = ({icon, ...props}) => (
  <NamedLink css={{color: 'inherit', textDecoration: 'none'}} {...props}>
    <FontAwesomeIcon icon={icon} />
  </NamedLink>
)

const Footer = () => (
  <footer>
    <InlineList>
      <SocialLink name="twitter" icon={faTwitter} />
      <SocialLink name="github" icon={faGithub} />
      <SocialLink name="linkedin" icon={faLinkedin} />
    </InlineList>
  </footer>
)

export const Page = ({children, keywords, title}) => (
  <ThemeProvider theme={theme}>
    <Global styles={theme['global']} />
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
