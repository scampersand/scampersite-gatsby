import fp from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from '.'

const broken = x => fp.isObject(x) ? x : {phone: x}

const is = x => x !== undefined && x !== null

const negate = x =>
  typeof x === 'string' ? (x.startsWith('-') ? x.substring(1) : '-' + x) : -x

const colWidths = (rawSpans, rawColumns) => {
  const [spans, columns] = fp.map(broken, [rawSpans, rawColumns])
  return fp.pipe(
    fp.toPairs,
    fp.map(([k, c]) => [k, (spans[k] || spans.phone) / columns[k]]),
    fp.fromPairs,
    fp.mapValues(v => `${100 * v}%`),
  )(columns)
}

export const FlexGrid = ({
  columns,
  gutter,
  colGutter,
  rowGutter,
  children,
  ...props
}) => {
  columns = broken(columns)
  colGutter = broken(is(colGutter) ? colGutter : is(gutter) ? gutter : 0)
  rowGutter = broken(is(rowGutter) ? rowGutter : is(gutter) ? gutter : 0)
  return (
    <Flex
      justifyContent="start"
      flexWrap="wrap"
      ml={fp.mapValues(negate, colGutter)}
      mt={fp.mapValues(negate, rowGutter)}
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

FlexGrid.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
  ]).isRequired,
}

FlexGrid.Col = ({span, ...props}) => <Box {...props} />

FlexGrid.Col.displayName = 'FlexGrid-Col'

// NB: FlexGrid.Col.defaultProps = {span: 1} doesn't work for detecting
// isCol. Instead force callers to pass span explicitly for now.
FlexGrid.Col.propTypes = {
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
  ]).isRequired,
}
