import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import MainNav from './MainNav';

const Header = (props) => {
    return (
        <header className="Header">
            <Link className="Header__logo-link" to={'/'}>{props.title}</Link>
            <MainNav location={props.location} />
        </header>
    );
}

Header.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
};

export default Header;