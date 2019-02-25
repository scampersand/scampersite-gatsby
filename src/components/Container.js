import React from 'react'
import {Box} from '.'

export const Container = props => (
  <Box
    mx="auto"
    px="2rem"
    maxWidth={['auto', 'calc(1152px + 2rem)', 'calc(1664px + 2rem)']}
    {...props}
  />
)
