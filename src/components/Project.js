import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import {Box, Card, FlexGrid, H2, H3, Image, NamedLink, P, Section} from '.'

export const Project = ({title, category, link, image, flip, ...props}) => {
  if (link) {
    title = <NamedLink name={link}>{title}</NamedLink>
  }
  return (
    <Section.SubSection>
      <FlexGrid columns={5} gutter={2}>
        <FlexGrid.Col span={[5, 2]} order={[0, flip ? 1 : 0]}>
          <H3>{category}</H3>
          <H2>{title}</H2>
          <Box {...props} />
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

Project.Description = props => <P {...props} />

Project.Description.displayName = 'Project.Description'

Project.Testimonial = ({from, children}) => (
  <Card pl={2} borderLeft="accent">
    <P
      fontSize="larger"
      fontWeight="bold"
      fontStyle="italic"
      css={
        // until https://github.com/rebassjs/rebass/pull/558
        {fontStyle: 'italic'}
      }
    >
      {children}
    </P>
    <P as="cite">&mdash;{from}</P>
  </Card>
)

Project.Testimonial.displayName = 'Project.Testimonial'

Project.Award = ({name, link, ...props}) => {
  let content = (
    <>
      <FontAwesomeIcon icon={faAward} /> <span>{name}</span>
    </>
  )
  if (link) {
    content = <NamedLink name={link}>{content}</NamedLink>
  }
  return <Box {...props}>{content}</Box>
}

Project.Award.displayName = 'Project.Award'
