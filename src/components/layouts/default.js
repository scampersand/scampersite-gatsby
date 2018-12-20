import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header'

import 'normalize.css'
import './reset.css'
import '../../css/screen.scss'

const Layout = ({children, className}) => (
  <main role="main" className={className}>
    <Header />
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
