import React from 'react'
import {Box, Card, Text} from '.'
import {fs} from '../theme'

export const Fieldset = props => <Box as="fieldset" {...props} />

export const Input = props => (
  <Card as="input" border="input" borderRadius="rounded" p="1em" {...props} />
)

export const Label = props => (
  <Text
    as="label"
    variant="titleSans"
    fontSize={fs.sansTitle}
    {...props}
    css={[{display: 'block'}, props.css]}
  />
)
