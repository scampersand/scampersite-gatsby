import React from 'react'
import styled from '@emotion/styled'

import vars from '~/variables.js'

export const Section = styled.section({
  marginTop: vars.sectionMargin,
  marginBottom: vars.sectionMargin,
})

Section.SubSection = props => (
  <Section
    css={{
      marginTop: vars.subSectionMargin,
      marginBottom: vars.subSectionMargin,
    }}
    {...props}
  />
)
