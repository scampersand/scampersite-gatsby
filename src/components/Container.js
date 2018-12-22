import React from 'react'
import {Box} from '@rebass/grid/emotion'

const Container = props => (
  <Box {...props} mx="auto" px={'1rem'} css={{maxWidth: '1024px'}} />
)

export default Container
