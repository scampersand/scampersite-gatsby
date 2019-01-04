import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'

import {Row, Col} from './Grid'
import Section from './Section'
import Image from './Image'

const Project = ({title, children, image, flip}) => (
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

Project.Group = ({alternating, children}) =>
  React.Children.map(children, (child, i) =>
    alternating && i % 2 ? React.cloneElement(child, {flip: true}) : child,
  )

Project.Description = ({children}) => <p>{children}</p>

Project.Testimonial = ({from, children}) => (
  <>
    <p>{children}</p>
    <p>{from}</p>
  </>
)

Project.Award = ({name}) => (
  <p>
    <FontAwesomeIcon icon={faAward} /> <span>{name}</span>
  </p>
)

export default Project
