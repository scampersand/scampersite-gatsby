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
import {Box, Container, InlineList, Link, NamedLink, SEO} from '.'

const Header = props => (
  <Box as="header" {...props}>
    <Link
      href="/"
      css={{
        color: 'inherit',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      Scampersand
    </Link>
  </Box>
)

const Main = props => <main role="main" {...props} />

const SocialLink = ({icon, ...props}) => (
  <NamedLink css={{color: 'inherit', textDecoration: 'none'}} {...props}>
    <FontAwesomeIcon icon={icon} />
  </NamedLink>
)

const Footer = props => (
  <Box as="footer" {...props}>
    <InlineList>
      <SocialLink name="twitter" icon={faTwitter} />
      <SocialLink name="github" icon={faGithub} />
      <SocialLink name="linkedin" icon={faLinkedin} />
    </InlineList>
  </Box>
)

export const Page = ({keywords, title, ...props}) => (
  <ThemeProvider theme={theme}>
    <Global styles={theme['global']} />
    <SEO title={title} keywords={keywords} />
    <Container>
      <Header />
      <Main {...props} />
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
