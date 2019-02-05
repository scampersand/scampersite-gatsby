import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {Container, InlineList, NamedLink, Text} from '.'

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
    <InlineList>
      <Text variant="titleSans" fontSize="sansSmall" fontWeight="bold" {...props}>
        Scampersand
      </Text>
      <Text fontSize="serifMedium" {...props}>
        {'//'}
      </Text>
      <Text fontSize="serifMedium" {...props}>
        Providence, Rhode Island
      </Text>
    </InlineList>
  </Container>
)

