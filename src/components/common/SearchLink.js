import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const SearchLink = ({ className, queryKey, queryValue }) => (
    <Link
        className={`SearchLink SearchLink--${queryKey} ${
            className ? className : ''
        }`}
        to={`/${queryKey}/${queryValue}`}
    >
        {queryValue}
    </Link>
);

SearchLink.propTypes = {
    className: PropTypes.string,
    queryKey: PropTypes.string.isRequired,
    queryValue: PropTypes.string.isRequired
};

export default SearchLink;
