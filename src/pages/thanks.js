import React from 'react'
import {Container, Header, Lede, LinkTo, Page, Section} from '~/components'

const ThanksPage = () => (
  <Page title="Thanks!">
    <Section>
      <Container>
        <LinkTo href="/">
          <Header>Scampersand</Header>
        </LinkTo>
        <Lede my="30px">Thanks!</Lede>
        <Lede my="30px">We'll be in touch soon.</Lede>
      </Container>
    </Section>
  </Page>
)

export default ThanksPage
