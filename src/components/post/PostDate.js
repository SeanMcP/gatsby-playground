import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'react-feather';

const PostDate = ({ date, hideIcon, modifier }) => {
    return (
        <div className={`PostDate ${modifier ? `PostDate--${modifier}` : ''}`}>
            {!hideIcon && <Calendar className={'PostDate__icon'} size={20}/>}
            <date className="PostDate__date">{date}</date>
        </div>
    );
};

PostDate.propTypes = {
    date: PropTypes.string.isRequired,
    hideIcon: PropTypes.bool,
    modifier: PropTypes.string
};

export default PostDate;