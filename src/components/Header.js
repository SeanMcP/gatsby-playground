import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import Responsive from './common/Responsive';
import Thumbnail from './common/Thumbnail';

const Header = props => {
    return (
        <header className="Header">
            <Responsive modifier="header">
                <Link className="Header__logo-link" to={'/'}>
                    {props.title}
                </Link>
                <MainNav location={props.location} />
            </Responsive>
        </header>
    );
};

Header.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
};

export default Header;
