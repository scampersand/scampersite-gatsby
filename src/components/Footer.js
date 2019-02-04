import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {Container, InlineList, NamedLink} from '.'

const SocialLink = ({icon, ...props}) => (
  <NamedLink css={{color: 'inherit', textDecoration: 'none'}} {...props}>
    <FontAwesomeIcon icon={icon} />
  </NamedLink>
)

export const Footer = props => (
  <Container as="footer" {...props}>
    <InlineList>
      <SocialLink name="twitter" icon={faTwitter} />
      <SocialLink name="github" icon={faGithub} />
      <SocialLink name="linkedin" icon={faLinkedin} />
    </InlineList>
  </Container>
)

