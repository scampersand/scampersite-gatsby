import React from 'react'
import {Card, Container, Flex, InlineList, Link, Text} from '.'
import {fs} from '../theme'

const Header = props => (
  <Text as="header" variant="titleSans" fontSize={fs.landingLogo} {...props} />
)

const Highlight = props => <Text css={{fontStyle: 'italic'}} {...props} />
Highlight.defaultProps = {as: 'span', color: 'emphasis'}
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
    <Link color="text" variant="titleSans" fontSize={fs.landingNav} {...props} />
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
  const px = '30px'
  const py = '30px'
  const borderWidth = '30px'
  return (
    <Card px={px} py={py} minHeight="100vh" width="100vw">
      <Card
        minHeight={`calc(100vh - ${py} - ${py})`}
        width="100%"
        css={{border: `${borderWidth} solid #0060ad`}}
      >
        <Container>
          <Flex
            flexDirection="column"
            alignItems="center"
            minHeight={`calc(100vh - ${py} - ${py} - ${borderWidth} - ${borderWidth})`}
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
