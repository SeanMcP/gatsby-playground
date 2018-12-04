import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const links = [
    {
        destination: '/articles',
        text: 'Articles'
    },
    {
        destination: '/about',
        text: 'About'
    },
    {
        destination: '/contact',
        text: 'Contact'
    }
];

const MainNav = ({ location }) => {
    return (
        <nav className="MainNav">
            {links.map(link => (
                <Link
                    className={`MainNav__link ${
                        location.pathname === link.destination
                            ? 'MainNav__link--current'
                            : ''
                    }`}
                    key={link.destination}
                    tabIndex={0}
                    to={link.destination}
                >
                    {link.text}
                </Link>
            ))}
        </nav>
    );
};

MainNav.propTypes = {
    location: PropTypes.object.isRequired
};

export default MainNav;
