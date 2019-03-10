import React from 'react'
import {
  Box,
  Container,
  Header,
  Lede,
  LinkTo,
  Page,
} from '~/components'

const ThanksPage = () => (
  <Page title="Thanks!">
    <Container>
      <Box pt="20.5vh">
        <LinkTo href="/">
          <Header textAlign="center">Scampersand</Header>
        </LinkTo>
      </Box>
      <Box py="6vh">
        <Lede textAlign="center">Thanks! We'll be in touch.</Lede>
      </Box>
    </Container>
  </Page>
)

export default ThanksPage
