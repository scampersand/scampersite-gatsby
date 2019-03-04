import React from 'react'
import {graphql} from 'gatsby'
import {namedImages} from '~/utils/queries'
import {
  Box,
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
  Slab,
} from '~/components'

const SectionHeader = ({title, children, ...props}) => (
  <Box {...props}>
    <H1>{title}</H1>
    <Lede>{children}</Lede>
  </Box>
)

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

      <Section id="work">
        <Container>
          <SectionHeader title="Recent Work">
            Some of our favorite projects and the amazing clients behind them.
          </SectionHeader>
          <Project.Group alternating>
            <Project
              title="Appsembler"
              category="Education"
              image={projectImages['appsembler-reports']}
              link="appsembler"
              as={Section.Subsection}
            >
              <Project.Description>
                Appsembler wanted to know how many learners were actively using
                their <NamedLink name="open-edx">Open edX</NamedLink> LMS. To
                give them insight into engagement and customer ROI, we built a
                secure usage tracker and then backfilled it with historical
                data. Previously inaccessible information became charts
                revealing trends and entirely new conversations for the customer
                success team to pursue. Our work ultimately became the
                foundation for Appsembler's customer-facing reporting tool,{' '}
                <NamedLink name="figures">Figures</NamedLink>.
              </Project.Description>
              <Project.Testimonial from="Aaron Beals, VP Engineering at Appsembler">
                &ldquo;I have to say, the amount you were able to get done with
                two people in this timeframe is amazing.&rdquo;
              </Project.Testimonial>
            </Project>

            <Project
              title="Tizra"
              category="Digital Publishing"
              image={projectImages['tizra-quickstart']}
              link="tizra"
              as={Section.Subsection}
            >
              <Project.Description>
                Tizra brought in Scampersand to improve the configurability and
                mobile experience of their Quickstart theme. Our job was to make
                these improvements on a small budget within an existing
                codebase. We applied some creative thinking and technical
                expertise to provide Tizra with a solution that speeds up their
                onboarding and allows them to pursue scaling their customer
                base.
              </Project.Description>
            </Project>

            <Project
              title="Digital Einstein Papers"
              category="Research"
              image={projectImages['einstein-search']}
              link="einstein"
              as={Section.Subsection}
            >
              <Project.Description>
                We worked with the Einstein Papers Project to improve the
                searchability of their online archive. Based on extensive
                feedback from researchers, we created a new UI that matches
                their terminology and workflow. The new interface is also
                mobile-friendly and includes explanations of commonly used
                abbreviations to make the archive approachable to new users.
              </Project.Description>
              <Project.Award name="SIIA CODiE Award finalist" link="codie" />
            </Project>
          </Project.Group>
        </Container>
      </Section>

      <Slab>
        <Section id="clients">
          <Container>
            <SectionHeader title="Our Clients">
              We work with clients who are helping people to learn, grow
              and contribute to their communities.
            </SectionHeader>
            <LogoGrid />
          </Container>
        </Section>
      </Slab>

      <Section id="contact">
        <Container>
          <SectionHeader title="Contact Us">
            Do you have a project where we could help?
            Say hello and let's put our heads together.
          </SectionHeader>
          <ContactForm />
        </Container>
      </Section>
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
