import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'

import 'normalize.css'
import './reset.css'
import './layout.css'

const Layout = ({children}) => (
  <main role="main">
    <Header />
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
