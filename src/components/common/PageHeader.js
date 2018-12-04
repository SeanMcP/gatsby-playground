import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ centered, children }) => {
    return (
        <header
            className={`PageHeader ${centered ? 'PageHeader--centered' : ''}`}
        >
            {children}
            <hr />
        </header>
    );
};

PageHeader.propTypes = {
    centered: PropTypes.bool
};

export default PageHeader;
