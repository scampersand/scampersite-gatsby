import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from '@rebass/grid/emotion'

const asArray = x => (Array.isArray(x) ? x : [x])

const is = x => x !== undefined && x !== null

const negate = x =>
  typeof x === 'string' ? (x.startsWith('-') ? x.substring(1) : '-' + x) : -x

const colWidths = (cols, columns) => {
  cols = asArray(cols)
  columns = asArray(columns)
  return _.zipWith(cols, columns, (n, N) => (n || cols[0]) / (N || columns[0]))
}

export const Row = ({
  columns,
  gutter,
  colGutter,
  rowGutter,
  children,
  ...props
}) => {
  columns = asArray(columns)
  colGutter = asArray(is(colGutter) ? colGutter : is(gutter) ? gutter : 0)
  rowGutter = asArray(is(rowGutter) ? rowGutter : is(gutter) ? gutter : 0)
  return (
    <Flex
      justifyContent="start"
      flexWrap="wrap"
      ml={colGutter.map(negate)}
      mt={rowGutter.map(negate)}
      {...props}
    >
      {React.Children.map(children, child => {
        const isCol = !!(child.props && child.props.cols)
        const cols = isCol ? child.props.cols : 1
        const colProps = {
          cols,
          width: colWidths(cols, columns),
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
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

Col.defaultProps = {
  cols: 1,
}
