import React from 'react'
import {LinkTo, Text} from '.'

export const Link = ({href, target, ...props}) => (
  <LinkTo href={href} target={target}>
    <Text {...props} />
  </LinkTo>
)

Link.defaultProps = {
  as: 'span',
  color: 'link',
  fontWeight: 'bold',
}
