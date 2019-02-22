import React from 'react'
import {Box} from '.'

export const Section = props => <Box py={3} as="section" {...props} />

Section.displayName = 'Section'

Section.SubSection = props => <Box py={2} {...props} />

Section.SubSection.displayName = 'Section.SubSection'
