import React from 'react'
import {Box} from '.'
import {spy} from '../theme'

// TODO vertical spacing should use rhythm, not rems

export const Section = props => <Box py={spy.section} as="section" {...props} />

Section.displayName = 'Section'

Section.SubSection = props => <Box py="1rem" {...props} />

Section.SubSection.displayName = 'Section.SubSection'
