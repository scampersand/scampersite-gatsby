import React from 'react'
import {Box, Card, Container, Flex, InlineList, Link, Text} from '.'

const Header = props => <Text as="header" variant="titleSans" {...props} />

const Highlight = props => <Text css={{fontStyle: 'italic'}} {...props} />
Highlight.defaultProps = {as: 'span', color: 'accent'}
Highlight.displayName = 'Highlight'

const Mission = props => (
  <Text
    textAlign="center"
    fontSize={['7.5vw', '76.8333px'] /* 7.5 * 1024 */}
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
    <Link color="text" variant="titleSans" {...props} />
  </Card>
)

const Nav = props => (
  <InlineList gutter={3} {...props}>
    <NavLink href="#work">Work</NavLink>
    <NavLink href="#clients">Clients</NavLink>
    <NavLink href="#contact">Let's Talk</NavLink>
  </InlineList>
)

export const Landing = () => (
  <Box>
    <Container
      as={Flex}
      flexDirection="column"
      alignItems="center"
      css={{minHeight: '100vh'}}
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
    </Container>
  </Box>
)
