import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {Container, Flex, InlineList, NamedLink, Slab, Text} from '.'
import {fs} from '../theme'

const SocialLink = ({icon, ...props}) => (
  <NamedLink css={{color: 'inherit', textDecoration: 'none'}} {...props}>
    <FontAwesomeIcon icon={icon} />
  </NamedLink>
)

export const Footer = props => (
  <Slab as="footer" pt="1rem" pb="0.5rem" bg="footer" {...props}>
    <Container as={Flex} flexDirection="column" alignItems="center">
      <InlineList gutter="1rem">
        <SocialLink name="twitter" icon={faTwitter} />
        <SocialLink name="github" icon={faGithub} />
        <SocialLink name="linkedin" icon={faLinkedin} />
      </InlineList>
      <InlineList gutter="0.5rem" mt="0.5rem">
        <Text variant="titleSans" fontSize={fs.footerLogo} fontWeight="bold" {...props}>
          Scampersand
        </Text>
        <Text fontSize={fs.footerText} {...props}>
          {'//'}
        </Text>
        <Text fontSize={fs.footerText} {...props}>
          Providence, Rhode Island
        </Text>
      </InlineList>
    </Container>
  </Slab>
)
