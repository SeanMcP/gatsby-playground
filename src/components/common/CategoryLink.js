import React from 'react';
import PropTypes from 'prop-types';
import { Folder } from 'react-feather';

import SearchLink from './SearchLink';

const CategoryLink = ({ hideIcon, lede, modifier, queryValue }) => {
    return (
        <div className={`CategoryLink ${modifier ? `CategoryLink--${modifier}` : ''}`}>
            {!hideIcon && (
                <Folder className={'CategoryLink__icon'} size={20} />
            )}
            <SearchLink
                queryKey={'categories'}
                queryValue={queryValue}
            />
        </div>
    );
};

CategoryLink.propTypes = {
    hideIcon: PropTypes.bool,
    lede: PropTypes.string,
    modifier: PropTypes.string,
    queryValue: PropTypes.string.isRequired,
};

export default CategoryLink;