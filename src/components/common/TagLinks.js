import React from 'react';
import PropTypes from 'prop-types';

import SearchLink from './SearchLink';
import Icon from '../common/Icon';

const TagLinks = ({ hideIcon, modifier, tags }) => {
    return (
        <div className={`TagLinks ${modifier ? `TagLinks--${modifier}` : ''}`}>
            {!hideIcon && <Icon className={'TagLinks__icon'} icon={'Tag'} />}
            {tags.map(tag => (
                <SearchLink key={tag} queryKey={'tags'} queryValue={tag} />
            ))}
        </div>
    );
};

TagLinks.propTypes = {
    hideIcon: PropTypes.bool,
    modifier: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagLinks;
