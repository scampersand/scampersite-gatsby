import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import {Box, Card, FlexGrid, H2, H3, Image, NamedLink, Text} from '.'

export const Project = ({
  title,
  category,
  link,
  image,
  flip,
  children,
  ...props
}) => {
  if (link) {
    title = <NamedLink name={link}>{title}</NamedLink>
  }
  return (
    <FlexGrid columns={5} gutter={2} {...props}>
      <FlexGrid.Col span={{phone: 5, ipadl: 2}} order={[0, flip ? 1 : 0]}>
        <H3>{category}</H3>
        <H2>{title}</H2>
        <Box children={children} />
      </FlexGrid.Col>
      <FlexGrid.Col span={{phone: 5, ipadl: 3}} order={[0, flip ? 0 : 1]}>
        <Image image={image} />
      </FlexGrid.Col>
    </FlexGrid>
  )
}

Project.defaultProps = {
  mb: '3em',
}

Project.Group = ({alternating, children}) =>
  React.Children.map(children, (child, i) =>
    alternating && i % 2 ? React.cloneElement(child, {flip: true}) : child,
  )

Project.Group.displayName = 'Project.Group'

Project.Description = props => <Text mb="1em" {...props} />

Project.Description.displayName = 'Project.Description'

Project.Testimonial = ({from, children}) => (
  <Card pl={2} borderLeft="accent">
    <Text
      fontSize="serifLarge"
      fontWeight="bold"
      fontStyle="italic"
      css={
        // until https://github.com/rebassjs/rebass/pull/558
        {fontStyle: 'italic'}
      }
      mb="0.5em"
    >
      {children}
    </Text>
    <Text as="cite">&mdash;{from}</Text>
  </Card>
)

Project.Testimonial.displayName = 'Project.Testimonial'

Project.Award = ({name, link, ...props}) => {
  let content = (
    <>
      <FontAwesomeIcon icon={faAward} />{' '}
      <Text
        as="span"
        fontFamily="sans"
        fontWeight="normal"
        fontSize="sansSmall"
        color="text"
      >
        {name}
      </Text>
    </>
  )
  if (link) {
    content = <NamedLink name={link}>{content}</NamedLink>
  }
  return <Box {...props}>{content}</Box>
}

Project.Award.displayName = 'Project.Award'
