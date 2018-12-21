import _ from 'lodash'
import React from 'react'
import {graphql} from 'gatsby'

import Page from '../components/Page'
import Section from '../components/Section'
import Project from '../components/Project'
import LogoGrid from '../components/LogoGrid'

const Intro = props => <Section {...props} />

const namedImages = images =>
  _(images.edges)
    .map(({node}) => [node.name, node])
    .fromPairs()
    .value()

const IndexPage = ({
  data: {
    site: {siteMetadata},
    projectImages,
    clientLogos,
  },
}) => {
  projectImages = namedImages(projectImages)
  clientLogos = namedImages(clientLogos)
  return (
    <Page title={siteMetadata.title}>
      <Intro>{siteMetadata.description}</Intro>
      <Section>
        <h1>Work</h1>
        <Project
          title="Tizra Quickstart"
          image={projectImages['tizra-quickstart']}
        >
          <Project.Description>
            Tizra brought in Scampersand to improve the configurability and
            mobile experience of their out-of-the-box theme. Our job was to make
            these improvements on a small budget within an existing codebase. We
            applied some creative thinking and technical expertise to provide
            Tizra with a solution that speeds up their onboarding and allows
            them to pursue scaling their customer base.
          </Project.Description>
        </Project>
        <Project
          title="Appsembler Reporting"
          image={projectImages['appsembler-reports']}
        >
          <Project.Description>
            Appsembler wanted to know how many learners were actively using
            their Open edX LMS. To give them insight into engagement and
            customer ROI, we built a secure usage tracker and then backfilled it
            with historical data. Previously inaccessible information became
            charts revealing trends and entirely new conversations for the
            customer success team to pursue. Our work on this ultimately became
            the foundation for Appsembler's customer-facing reporting tool,
            Figures.
          </Project.Description>
          <Project.Testimonial from="Aaron Beals, Appsembler VP Eng">
            I have to say, the amount you were able to get done with two people
            in this timeframe is amazing.
          </Project.Testimonial>
        </Project>
        <Project
          title="Einstein Search"
          image={projectImages['einstein-search']}
        >
          <Project.Description>
            We worked with the Einstein Papers Project to improve the
            searchability of their online archive. Based on extensive feedback
            from researchers, we created a new UI that matches their terminology
            and workflow. The new interface is also mobile-friendly and includes
            explanations of commonly used abbreviations to make the archive more
            approachable to new users.
          </Project.Description>
          <Project.Award name="SIIA CODiE Award finalist" />
        </Project>
      </Section>
      <Section>
        <h1>Clients</h1>
        <LogoGrid logos={clientLogos} />
      </Section>
      <Section>
        <h1>Contact</h1>
        <a href="mailto:hello@scampersand.com">hello@scampersand.com</a>
      </Section>
    </Page>
  )
}

export default IndexPage

export const query = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment fluidImages on FileConnection {
    edges {
      node {
        name
        publicURL
        ...fluidImage
      }
    }
  }
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    clientLogos: allFile(filter: {relativeDirectory: {eq: "clients"}}) {
      ...fluidImages
    }
    projectImages: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      ...fluidImages
    }
  }
`
