import React from 'react'
import {Box} from '.'

export const Section = props => <Box my={3} {...props} />

Section.displayName = 'Section'

Section.SubSection = props => <Box my={2} {...props} />

Section.SubSection.displayName = 'Section.SubSection'
