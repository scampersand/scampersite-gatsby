import React from 'react'
import {Box, Text} from '.'

export const Fieldset = props => <Box as="fieldset" {...props} />

export const Input = props => <Text as="input" {...props} />

export const Label = props => (
  <Text
    as="label"
    variant="titleSans"
    fontSize="sansSmall"
    {...props}
    css={[{display: 'block'}, props.css]}
  />
)
