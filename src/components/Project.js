import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import {Row, Col, Section, Image, NamedLink} from '.'

export const Project = ({title, link, children, image, flip}) => {
  if (link) {
    title = <NamedLink name={link}>{title}</NamedLink>
  }
  return (
    <Section.SubSection>
      <Row columns={5} gutter={2}>
        <Col cols={[5, 2]} order={[0, flip ? 1 : 0]}>
          <h2>{title}</h2>
          <div>{children}</div>
        </Col>
        <Col cols={[5, 3]} order={[0, flip ? 0 : 1]}>
          <Image image={image} />
        </Col>
      </Row>
    </Section.SubSection>
  )
}

Project.Group = ({alternating, children}) =>
  React.Children.map(children, (child, i) =>
    alternating && i % 2 ? React.cloneElement(child, {flip: true}) : child,
  )

Project.Group.displayName = 'Project.Group'

Project.Description = ({children}) => <p>{children}</p>

Project.Description.displayName = 'Project.Description'

Project.Testimonial = ({from, children}) => (
  <>
    <p>{children}</p>
    <p>{from}</p>
  </>
)

Project.Testimonial.displayName = 'Project.Testimonial'

Project.Award = ({name, link}) => {
  let content = (
    <>
      <FontAwesomeIcon icon={faAward} /> <span>{name}</span>
    </>
  )
  if (link) {
    content = <NamedLink name={link}>{content}</NamedLink>
  }
  return <p>{content}</p>
}

Project.Award.displayName = 'Project.Award'

export default Project
