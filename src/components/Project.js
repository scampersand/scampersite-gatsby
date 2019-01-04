import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import {Flex, Box} from '@rebass/grid/emotion'

import vars from '../variables'
import Section from './Section'
import Image from './Image'

const GUTTER = 20

const Row = props => <Flex {...props} flexWrap="wrap" mx={-GUTTER/2} />

const Column = props => <Box {...props} px={GUTTER/2} />

const Project = ({title, children, image, flip}) => (
  <Section.SubSection>
    <Row>
      <Column width={[1, 1 - vars.projectImageWidth]} order={[0, flip ? 1 : 0]}>
        <h2>{title}</h2>
        <div>{children}</div>
      </Column>
      <Column width={[1, vars.projectImageWidth]} order={[0, flip ? 0 : 1]}>
        <Image image={image} />
      </Column>
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
