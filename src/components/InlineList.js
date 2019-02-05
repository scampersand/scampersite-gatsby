import React from 'react'
import {Box} from '.'

export const InlineList = ({children, gutter = 1, ...props}) => (
  <Box as="ul" css={{listStyle: 'none', marginLeft: 0}}>
    {React.Children.map(children, (child, i) => (
      <Box
        as="li"
        key={i}
        mr={i < children.length - 1 ? gutter : 0}
        css={{
          display: 'inline-block',
        }}
      >
        {child}
      </Box>
    ))}
  </Box>
)
