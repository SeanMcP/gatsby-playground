import React from 'react'
import { Link } from 'gatsby'

import '../styles/_index.css'
import Header from './Header';
import MainNav from './MainNav';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div className="Layout">
        <Header location={location} title={title} />
        {children}
      </div>
    )
  }
}

export default Layout
