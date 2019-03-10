import React from 'react'
import {Box} from '.'
import {spy} from '../theme'

// TODO vertical spacing should use rhythm, not rems

export const Section = ({first, ...props}) => {
  const pt = Object.assign(
    {},
    spy.section,
    first && {phone: 0, ipadp: 0, ipadl: 0, laptop: spy.section.ipadl},
    props.py,
    props.pt,
  )
  return <Box as="section" {...props} pt={pt} />
}

Section.displayName = 'Section'

Section.SubSection = props => <Box py="1rem" {...props} />

Section.SubSection.displayName = 'Section.SubSection'
