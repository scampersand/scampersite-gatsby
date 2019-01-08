import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import {FlexGrid, Section, Image, NamedLink} from '.'

export const Project = ({title, link, children, image, flip}) => {
  if (link) {
    title = <NamedLink name={link}>{title}</NamedLink>
  }
  return (
    <Section.SubSection>
      <FlexGrid columns={5} gutter={2}>
        <FlexGrid.Col span={[5, 2]} order={[0, flip ? 1 : 0]}>
          <h2>{title}</h2>
          <div>{children}</div>
        </FlexGrid.Col>
        <FlexGrid.Col span={[5, 3]} order={[0, flip ? 0 : 1]}>
          <Image image={image} />
        </FlexGrid.Col>
      </FlexGrid>
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
  <blockquote>
    <p>{children}</p>
    <cite>{from}</cite>
  </blockquote>
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
