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
  Link,
  LogoGrid,
  Page,
  Project,
  Section,
  Slab,
} from '~/components'
import {spy} from '../theme'

const SectionHeader = ({title, children, ...props}) => (
  <Box {...props}>
    <H1>{title}</H1>
    <Lede maxWidth={{phone: 'none', laptop: '90%'}}>{children}</Lede>
  </Box>
)

const IndexPage = ({data: {projectImages, clientLogos}}) => {
  projectImages = namedImages(projectImages)
  return (
    <Page>
      <Landing />

      <Section id="work" first>
        <Container>
          <SectionHeader title="Recent Work">
            Some of our favorite projects and the amazing clients
            behind&nbsp;them.
          </SectionHeader>
          <Project.Group alternating>
            <Project
              title="Appsembler"
              category="Education"
              image={projectImages['appsembler-reports']}
              imageColProps={{
                pt: {
                  phone: 16,
                  ipadl: 0,
                },
              }}
              link="appsembler"
              as={Section.Subsection}
            >
              <Project.Description>
                Appsembler wanted their customers to know how learners were
                using their <Link href="open-edx">Open edX</Link> LMS. To give
                them insight into engagement and ROI, we built a secure usage
                tracker and backfilled it with historical data. Previously
                inaccessible info became charts revealing trends and entirely
                new conversations for the customer success team to pursue.
                Appsembler used this foundation to build their customer-facing
                reporting tool, <Link href="figures">Figures</Link>.
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
              imageColProps={{
                pl: {
                  phone: 16,
                  ipadl: 0,
                },
                pr: {
                  phone: 16,
                  ipadl: 72,
                },
              }}
              link="tizra"
              as={Section.Subsection}
            >
              <Project.Description>
                Tizra brought in Scampersand to improve the configurability and
                mobile experience of their Quickstart theme. Our job was to make
                these improvements on a limited budget within an existing
                codebase. We applied some creative thinking and technical
                expertise to provide Tizra with a solution that speeds up their
                onboarding and helps their customers start publishing more
                quickly.
              </Project.Description>
            </Project>

            <Project
              title="Digital Einstein Papers"
              category="Research"
              image={projectImages['einstein-search']}
              imageColProps={{
                pt: {
                  phone: 16,
                  ipadl: 0,
                },
              }}
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
              We work with clients who are helping people to learn, grow and
              contribute to their&nbsp;communities.
            </SectionHeader>
            <LogoGrid />
          </Container>
        </Section>
      </Slab>

      <Section id="contact">
        <Container>
          <SectionHeader title="Contact Us">
            Do you have a project where we could help? Say hello and let's put
            our heads&nbsp;together.
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
        ...GatsbyImageSharpFluid_noBase64
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
    projectImages: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      ...fluidImages
    }
  }
`
