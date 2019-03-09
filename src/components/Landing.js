import fp from 'lodash/fp'
import React from 'react'
import {Card, Container, Flex, InlineList, Link, Text} from '.'
import {bb, fs} from '../theme'

const Header = props => (
  <Text as="header" variant="titleSans" fontSize={fs.landingLogo} {...props} />
)

const Highlight = props => <Text css={{fontStyle: 'italic'}} {...props} />
Highlight.defaultProps = {as: 'span', color: 'emphasis'}
Highlight.displayName = 'Highlight'

const Mission = props => (
  <Text
    textAlign="center"
    fontSize={{
      phone: '7.5vw',
      ipadl: '76.8333px', // 7.5 * 1024
    }}
    lineHeight={1}
    {...props}
  >
    We work with
    <br />
    <Highlight>startups &amp; organizations</Highlight>
    <br />
    to build software
    <br />
    that makes a <Highlight>difference.</Highlight>
  </Text>
)

const NavLink = props => (
  <Card borderBottom={bb.nav}>
    <Link
      color="text"
      variant="titleSans"
      fontSize={fs.landingNav}
      {...props}
    />
  </Card>
)

const Nav = props => (
  <InlineList gutter="2rem" {...props}>
    <NavLink href="#work">Work</NavLink>
    <NavLink href="#clients">Clients</NavLink>
    <NavLink href="#contact">Let's Talk</NavLink>
  </InlineList>
)

export const Landing = () => {
  const frameWidths = fp.mapValues(v => v.replace(/ .*/, ''), bb.frame)
  return (
    <Card
      minHeight="100vh"
      mx="auto"
      py={frameWidths}
      width={fp.mapValues(v => `calc(100vw - (${v} * 2))`, frameWidths)}
    >
      <Card
        minHeight={
          // top padding, bottom padding
          fp.mapValues(v => `calc(100vh - (${v} * 2))`, frameWidths)
        }
        width="100%"
        border={bb.frame}
      >
        <Container>
          <Flex
            flexDirection="column"
            alignItems="center"
            minHeight={
              // top padding, top frame, bottom frame, bottom padding
              fp.mapValues(v => `calc(100vh - (${v} * 4))`, frameWidths)
            }
          >
            <Flex
              flex="1"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-end"
              py="7vh"
            >
              <Header>Scampersand</Header>
            </Flex>
            <Mission />
            <Flex
              flex="1"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-end"
              py="7vh"
            >
              <Nav />
            </Flex>
          </Flex>
        </Container>
      </Card>
    </Card>
  )
}
