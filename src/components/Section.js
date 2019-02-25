import React from 'react'
import {Box} from '.'

// TODO vertical spacing should use rhythm, not rems

export const Section = props => <Box py="2rem" as="section" {...props} />

Section.displayName = 'Section'

Section.SubSection = props => <Box py="1rem" {...props} />

Section.SubSection.displayName = 'Section.SubSection'
