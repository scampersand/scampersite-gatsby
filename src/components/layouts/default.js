import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header'
import SEO from '../seo'

import 'normalize.css'
import './reset.css'
import '../../css/screen.scss'

const Layout = ({children, className, keywords, title}) => (
  <>
    <SEO title={title} keywords={keywords} />
    <main role="main" className={className}>
      <Header />
      {children}
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default Layout
