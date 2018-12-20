import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../seo'

// normalize comes from npm
import 'normalize.css'

// our own simple reset
import './reset.css'

const Layout = ({children, keywords, title}) => (
  <>
    <SEO title={title} keywords={keywords} />
    <main role="main">
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
