import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAward} from '@fortawesome/free-solid-svg-icons'
import {Box, Card, FlexGrid, H2, H3, Image, Link, Text} from '.'
import {bb, fs, spy} from '../theme'

export const Project = ({
  title,
  category,
  link,
  image,
  imageColProps,
  imageProps,
  flip,
  children,
  ...props
}) => {
  if (link) {
    title = <Link href={link}>{title}</Link>
  }
  return (
    <FlexGrid columns={{phone: 1, ipadl: 5}} gutter="1rem" pt={spy.subsection} {...props}>
      <FlexGrid.Col
        span={{phone: 1, ipadl: 2}}
        order={{phone: 0, ipadl: flip ? 1 : 0}}
      >
        <H3>{category}</H3>
        <H2>{title}</H2>
        <Box children={children} />
      </FlexGrid.Col>
      <FlexGrid.Col
        span={{phone: 1, ipadl: 3}}
        order={{phone: 0, ipadl: flip ? 0 : 0}}
        {...imageColProps}
      >
        <Image image={image} {...imageProps} />
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
  <Card pl="1rem" borderLeft={bb.quote}>
    <Text
      fontSize={fs.quote}
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
        fontSize={fs.sansTitle}
        color="text"
      >
        {name}
      </Text>
    </>
  )
  if (link) {
    content = <Link href={link}>{content}</Link>
  }
  return <Box {...props}>{content}</Box>
}

Project.Award.displayName = 'Project.Award'
