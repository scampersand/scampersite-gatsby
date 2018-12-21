import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'

import Section from './Section'
import Image from './Image'

const Project = ({title, children, image}) => (
  <Section.SubSection>
    <h2>{title}</h2>
    <div>{children}</div>
    <Image image={image} />
  </Section.SubSection>
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
