import React from 'react'
import {Box} from '.'

export const Container = props => (
  <Box
    mx="auto"
    px="2rem"
    {...props}
    css={[{maxWidth: 'calc(1920px - 2rem)'}, props.css]}
  />
)
