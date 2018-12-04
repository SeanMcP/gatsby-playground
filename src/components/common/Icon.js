import React from 'react';
import PropTypes from 'prop-types';
import * as AllIcons from 'react-feather';

const Icon = ({ className, icon, size }) => {
    const I = AllIcons[icon];
    return (
        <I className={className ? className : null} size={size ? size : 20} />
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number
};

export default Icon;
