import React from 'react'
import {Box} from '.'

export const Container = props => (
  <Box {...props} mx="auto" px={'1rem'} css={{maxWidth: '1024px'}} />
)

export default Container
