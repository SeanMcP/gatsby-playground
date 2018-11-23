import React from 'react'
import { Link } from 'gatsby'

import '../styles/_index.css'
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div className="Layout">
        <Header location={location} title={title} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
