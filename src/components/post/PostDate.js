import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';

const PostDate = ({ date, hideIcon, modifier }) => {
    return (
        <div className={`PostDate ${modifier ? `PostDate--${modifier}` : ''}`}>
            {!hideIcon && (
                <Icon className={'PostDate__icon'} icon={'Calendar'} />
            )}
            <time className="PostDate__date">{date}</time>
        </div>
    );
};

PostDate.propTypes = {
    date: PropTypes.string.isRequired,
    hideIcon: PropTypes.bool,
    modifier: PropTypes.string
};

export default PostDate;
