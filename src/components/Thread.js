import React from 'react'
import {Card} from '.'

export const Thread = props => {
  const threadWidth = 2
  return (
    <Card
      bg="thread"
      css={{
        height: '100vh',
        position: 'fixed',
        left: `calc(50% - ${threadWidth / 2}px)`,
        width: `${threadWidth}px`,
        zIndex: -1,
      }}
      {...props}
    />
  )
}
