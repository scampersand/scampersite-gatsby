import React from 'react'
import PropTypes from 'prop-types'
import {Link} from '.'

// This exists purely for compatibility
export const NamedLink = ({name, ...props}) => (
  <Link {...props} href={name} />
)

NamedLink.displayName = 'NamedLink'

NamedLink.propTypes = {
  name: PropTypes.string.isRequired,
}
