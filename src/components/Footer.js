import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {Container, Flex, InlineList, LinkTo, Slab, Text} from '.'
import {fs} from '../theme'

const SocialLink = ({icon, ...props}) => (
  <LinkTo {...props}>
    <Text fontSize={fs.footerIcon}>
      <FontAwesomeIcon icon={icon} />
    </Text>
  </LinkTo>
)

export const Footer = props => (
  <Slab as="footer" pt="1rem" pb="0.5rem" bg="footer" {...props}>
    <Container as={Flex} flexDirection="column" alignItems="center">
      <InlineList gutter="1.25rem">
        <SocialLink href="twitter" icon={faTwitter} />
        <SocialLink href="github" icon={faGithub} />
        <SocialLink href="linkedin" icon={faLinkedin} />
      </InlineList>
      <InlineList gutter="0.25rem" mt="0.5rem">
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
