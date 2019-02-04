import React from 'react'

export const InlineList = ({children, ...props}) => (
  <ul css={{listStyle: 'none', marginLeft: 0}}>
    {React.Children.map(children, (child, i) =>
      <li
        key={i}
        css={{
          display: 'inline-block',
          marginRight: i < children.length - 1 ? '1rem' : 0,
        }}
      >
        {child}
      </li>
    )}
  </ul>
)
