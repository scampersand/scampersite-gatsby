import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from '@rebass/grid/emotion'

const asArray = x => (Array.isArray(x) ? x : [x])

const negate = x =>
  typeof x === 'string' ? (x.startsWith('-') ? x.substring(1) : '-' + x) : -x

export const Row = ({
  columns,
  gutter,
  colGutter,
  rowGutter,
  children,
  ...props
}) => {
  colGutter = colGutter || gutter
  rowGutter = rowGutter || gutter
  const negColGutter = asArray(colGutter).map(negate)
  const negRowGutter = asArray(rowGutter).map(negate)
  return (
    <Flex
      justifyContent="start"
      flexWrap="wrap"
      ml={negColGutter}
      mt={negRowGutter}
      {...props}
    >
      {React.Children.map(children, child => {
        const isCol = !!(child.props && child.props.cols)
        const cols = isCol ? child.props.cols : 1
        const colProps = {
          cols,
          width: asArray(cols).map(n => n / columns),
          pl: colGutter,
          pt: rowGutter,
        }
        return isCol ? (
          React.cloneElement(child, {
            ...colProps,
            ...child.props,
          })
        ) : (
          <Col {...colProps}>{child}</Col>
        )
      })}
    </Flex>
  )
}

Row.displayName = 'Row'

export const Col = ({cols, ...props}) => <Box {...props} />

Col.displayName = 'Col'

Col.propTypes = {
  cols: PropTypes.number,
}

Col.defaultProps = {
  cols: 1,
}
