import React from 'react'
import {graphql} from 'gatsby'
import {namedImages} from '~/utils/queries'
import {
  ContactForm,
  Container,
  H1,
  Landing,
  Lede,
  LogoGrid,
  NamedLink,
  Page,
  Project,
  Section,
} from '~/components'

const IndexPage = ({
  data: {
    site: {
      siteMetadata: {title, description},
    },
    projectImages,
    clientLogos,
  },
}) => {
  projectImages = namedImages(projectImages)
  return (
    <Page title={title}>
      <Landing />
      <Container as={Section} id="work">
        <H1>Recent Work</H1>
        <Lede>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et consequat nunc.
        </Lede>
        <Project.Group alternating>
          <Project
            title="Appsembler"
            category="Education"
            image={projectImages['appsembler-reports']}
            link="appsembler"
          >
            <Project.Description>
              Appsembler wanted to know how many learners were actively using
              their <NamedLink name="open-edx">Open edX</NamedLink> LMS. To give
              them insight into engagement and customer ROI, we built a secure
              usage tracker and then backfilled it with historical data.
              Previously inaccessible information became charts revealing trends
              and entirely new conversations for the customer success team to
              pursue. Our work ultimately became the foundation for Appsembler's
              customer-facing reporting tool,{' '}
              <NamedLink name="figures">Figures</NamedLink>.
            </Project.Description>
            <Project.Testimonial from="Aaron Beals, VP Eng at Appsembler">
              &ldquo;I have to say, the amount you were able to get done with
              two people in this timeframe is amazing.&rdquo;
            </Project.Testimonial>
          </Project>
          <Project
            title="Tizra"
            category="Scholarly Publishing"
            image={projectImages['tizra-quickstart']}
            link="tizra"
          >
            <Project.Description>
              Tizra brought in Scampersand to improve the configurability and
              mobile experience of their Quickstart theme. Our job was to make
              these improvements on a small budget within an existing codebase.
              We applied some creative thinking and technical expertise to
              provide Tizra with a solution that speeds up their onboarding and
              allows them to pursue scaling their customer base.
            </Project.Description>
          </Project>
          <Project
            title="Digital Einstein Papers"
            category="Research"
            image={projectImages['einstein-search']}
            link="einstein"
          >
            <Project.Description>
              We worked with the Einstein Papers Project to improve the
              searchability of their online archive. Based on extensive feedback
              from researchers, we created a new UI that matches their
              terminology and workflow. The new interface is also
              mobile-friendly and includes explanations of commonly used
              abbreviations to make the archive approachable to new users.
            </Project.Description>
            <Project.Award name="SIIA CODiE Award finalist" link="codie" />
          </Project>
        </Project.Group>
      </Container>
      <Container as={Section} id="clients">
        <H1>Our Clients</H1>
        <Lede>
          We work with clients who are making a difference in education,
          research &amp; scholarly publishing, healthcare, and social impact
          ventures.
        </Lede>
        <LogoGrid />
      </Container>
      <Container as={Section} id="contact">
        <H1>Contact Us</H1>
        <Lede>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et consequat nunc.
        </Lede>
        <ContactForm />
      </Container>
    </Page>
  )
}

export default IndexPage

export const query = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
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
    projectImages: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      ...fluidImages
    }
  }
`
