import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'react-feather';

import SearchLink from './SearchLink';

const TagLinks = ({ hideIcon, modifier, tags }) => {
    return (
        <div className={`TagLinks ${modifier ? `TagLinks--${modifier}` : ''}`}>
            {!hideIcon && <Tag className={'TagLinks__icon'} size={20} />}
            {tags.map(tag => (
                <SearchLink
                    key={tag}
                    queryKey={'tags'}
                    queryValue={tag}
                />
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