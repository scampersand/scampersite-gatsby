import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {Container, Flex, InlineList, NamedLink, Slab, Text} from '.'

const SocialLink = ({icon, ...props}) => (
  <NamedLink css={{color: 'inherit', textDecoration: 'none'}} {...props}>
    <FontAwesomeIcon icon={icon} />
  </NamedLink>
)

export const Footer = props => (
  <Slab as="footer" pt={2} pb={1} bg="footer" {...props}>
    <Container as={Flex} flexDirection="column" alignItems="center">
      <InlineList gutter={3}>
        <SocialLink name="twitter" icon={faTwitter} />
        <SocialLink name="github" icon={faGithub} />
        <SocialLink name="linkedin" icon={faLinkedin} />
      </InlineList>
      <InlineList gutter={1} mt={1}>
        <Text variant="titleSans" fontSize="sansFooter" fontWeight="bold" {...props}>
          Scampersand
        </Text>
        <Text fontSize="serifFooter" {...props}>
          {'//'}
        </Text>
        <Text fontSize="serifFooter" {...props}>
          Providence, Rhode Island
        </Text>
      </InlineList>
    </Container>
  </Slab>
)
