import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from '.'

const asArray = x => (Array.isArray(x) ? x : [x])

const is = x => x !== undefined && x !== null

const negate = x =>
  typeof x === 'string' ? (x.startsWith('-') ? x.substring(1) : '-' + x) : -x

const colWidths = (span, columns) => {
  span = asArray(span)
  columns = asArray(columns)
  return _.zipWith(span, columns, (n, N) => (n || span[0]) / (N || columns[0]))
}

export const FlexGrid = ({
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
        const isCol = !!(child.props && child.props.span)
        const span = isCol ? child.props.span : 1
        const colProps = {
          span,
          width: colWidths(span, columns),
          pl: colGutter,
          pt: rowGutter,
        }
        return isCol ? (
          React.cloneElement(child, {
            ...colProps,
            ...child.props,
          })
        ) : (
          <FlexGrid.Col {...colProps}>{child}</FlexGrid.Col>
        )
      })}
    </Flex>
  )
}

FlexGrid.displayName = 'FlexGrid'

FlexGrid.Col = ({span, ...props}) => <Box {...props} />

FlexGrid.Col.displayName = 'FlexGrid.Col'

FlexGrid.Col.propTypes = {
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

FlexGrid.Col.defaultProps = {
  span: 1,
}
