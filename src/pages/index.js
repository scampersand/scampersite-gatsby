import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Landing from '../components/layouts/landing'

const Section = ({children}) => <section>{children}</section>

const Project = ({title, children, image}) => (
  <div>
    <h2>{title}</h2>
    <p>{children}</p>
    <img src={image} />
  </div>
)

Project.Description = ({children}) => <p>{children}</p>

Project.Testimonial = ({from, children}) => (
  <>
    <p>{children}</p>
    <p>{from}</p>
  </>
)

Project.Award = ({name}) => (
  <>
    <FontAwesomeIcon icon={faTwitter} />
    <p>{name}</p>
  </>
)

const Footer = () => (
  <footer>
    <ul className="list-inline">
      <li>
        <a href="https://twitter.com/scampersandco">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="https://github.com/scampersand">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/scampersand">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  </footer>
)

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Landing title={data.site.siteMetadata.title}>
        <section className="content">
          <div className="container">
            <div className="content-main">
              <h1>{data.site.siteMetadata.description}</h1>
            </div>
            <Section>
              <h1>Work</h1>
              <Project
                title="Tizra Quickstart"
                image="https://placekitten.com/300/200"
              >
                <Project.Description>
                  Tizra brought in Scampersand to improve the configurability
                  and mobile experience of their out-of-the-box theme. Our job
                  was to make these improvements on a small budget within an
                  existing codebase. We applied some creative thinking and
                  technical expertise to provide Tizra with a solution that
                  speeds up their onboarding and allows them to pursue scaling
                  their customer base.
                </Project.Description>
              </Project>
              <Project
                title="Appsembler Reporting"
                image="https://placekitten.com/300/200"
              >
                <Project.Description>
                  Appsembler wanted to know how many learners were actively
                  using their Open edX LMS. To give them insight into engagement
                  and customer ROI, we built a secure usage tracker and then
                  backfilled it with historical data. Previously inaccessible
                  information became charts revealing trends and entirely new
                  conversations for the customer success team to pursue. Our
                  work on this ultimately became the foundation for Appsembler's
                  customer-facing reporting tool, Figures.
                </Project.Description>
                <Project.Testimonial from="Aaron Beals, Appsembler VP Eng">
                  I have to say, the amount you were able to get done with two
                  people in this timeframe is amazing.
                </Project.Testimonial>
              </Project>
              <Project
                title="Einstein Search"
                image="https://placekitten.com/300/200"
              >
                <Project.Description>
                  We worked with the Einstein Papers Project to improve the
                  searchability of their online archive. Based on extensive
                  feedback from researchers, we created a new UI that matches
                  their terminology and workflow. The new interface is also
                  mobile-friendly and includes explanations of commonly used
                  abbreviations to make the archive more approachable to new
                  users.
                </Project.Description>
                <Project.Award name="SIIA CODiE Award finalist" />
              </Project>
            </Section>
            <Section>
              <h1>Clients</h1>
            </Section>
            <Section>
              <h1>Contact</h1>
              <a
                href="mailto:hello@scampersand.com"
                className="t-bold t-underline"
              >
                hello@scampersand.com
              </a>
            </Section>
            <Footer />
          </div>
        </section>
      </Landing>
    )}
  />
)

export default IndexPage
