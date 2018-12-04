import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ className }) => {
    return (
        <img
            alt={"An illustration of Sean McPherson's head"}
            className={`Thumbnail ${className ? className : ''}`}
            src={require('../../assets/seanmcp.jpeg')}
        />
    );
};

Thumbnail.propTypes = {
    className: PropTypes.string
};

export default Thumbnail;
