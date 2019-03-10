import React from 'react'
import {Box} from '.'

export const Container = props => (
  <Box
    mx="auto"
    px={{
      phone: '0.75rem',
      ipadp: '1.5rem',
      ipadl: '2rem',
    }}
    maxWidth={{
      ipadl: 'calc(1152px + 2rem)',
      fhd: 'calc(1664px + 2rem)',
    }}
    {...props}
  />
)
