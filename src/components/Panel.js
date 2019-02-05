import React from 'react'
import {Box, Card, Container} from '.'

export const Panel = ({mx = '1rem', ...props}) => (
  <Card
    borderRadius="8px"
    bg="#e6e6e6"
    mx={[mx, mx, 'auto']}
    css={{maxWidth: `calc(1920px - ${mx})`}}
  >
    <Box mx={`-${mx}`}>
      <Container {...props} />
    </Box>
  </Card>
)
