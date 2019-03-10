import fp from 'lodash/fp'
import React from 'react'
import {
  Box,
  Container,
  Header,
  Lede,
  LinkTo,
  Page,
} from '~/components'
import {frameWidths} from '~/components/Landing'

const ThanksPage = () => (
  <Page title="Thanks!">
    <Container>
      <Box pt="17.5vh">
        <LinkTo href="/">
          <Header textAlign="center">Scampersand</Header>
        </LinkTo>
      </Box>
      <Box py="17.5vh">
        <Lede textAlign="center">Thanks! We'll be in touch.</Lede>
      </Box>
    </Container>
  </Page>
)

export default ThanksPage
