import React from 'react';
import { Link } from 'gatsby';

import '../styles/_index.css';
import Header from './Header';
import Responsive from './common/Responsive';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props;
        return (
            <div className="Layout">
                <Header location={location} title={title} />
                <Responsive modifier={'layout'}>{children}</Responsive>
                <Footer />
            </div>
        );
    }
}

export default Layout;
