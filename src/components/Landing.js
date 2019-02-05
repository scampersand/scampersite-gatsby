import React from 'react'
import {Box, Card, Container, Flex, InlineList, Link, Panel, Text} from '.'

const Header = props => (
  <Text as="header" fontWeight="bold" {...props}>
    Scampersand
  </Text>
)

const Highlight = props => <Text css={{fontStyle: 'italic'}} {...props} />
Highlight.defaultProps = {as: 'span', color: 'accent'}
Highlight.displayName = 'Highlight'

const Mission = props => (
  <Text
    textAlign="center"
    fontSize={['9vw', '92.2px']}
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
  <Card borderBottom="nav">
    <Link color="text" {...props} />
  </Card>
)

const Nav = props => (
  <InlineList {...props}>
    <NavLink href="#work">Work</NavLink>
    <NavLink href="#clients">Clients</NavLink>
    <NavLink href="#contact">Let's Talk</NavLink>
  </InlineList>
)

export const Landing = () => (
  <Box>
    <Box css={{height: '10vh'}} />
    <Panel
      as={Flex}
      flexDirection="column"
      alignItems="center"
      css={{minHeight: '85vh'}}
    >
      <Flex flex="1" flexDirection="column" justifyContent="flex-end" p="7vh">
        <Header />
      </Flex>
      <Mission />
      <Flex flex="1" flexDirection="column" justifyContent="flex-end" p="7vh">
        <Nav />
      </Flex>
    </Panel>
    <Box css={{height: '5vh'}} />
  </Box>
)
