import React from 'react'

const InlineList = ({children}) => (
  <ul css={{listStyle: 'none', marginLeft: 0}}>
    {children.map((child, i) => (
      <li
        key={i}
        css={{
          display: 'inline-block',
          marginRight: i < children.length - 1 ? '1rem' : 0,
        }}
      >
        {child}
      </li>
    ))}
  </ul>
)

export default InlineList
