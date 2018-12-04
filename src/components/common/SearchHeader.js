import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

import PageHeader from './PageHeader';

const SearchHeader = ({ queryKey, queryValue }) => {
    const capValue = capitalize(queryValue);
    return (
        <PageHeader>
            <h1 className="SearchHeader__heading">{capValue}</h1>
            <p>
                All the articles {queryKey === 'Category' ? 'in' : 'with'} the “
                <strong>{capValue}</strong>” {queryKey.toLowerCase()}.
            </p>
        </PageHeader>
    );
};

SearchHeader.propTypes = {
    queryKey: PropTypes.string.isRequired,
    queryValue: PropTypes.string.isRequired
};

export default SearchHeader;
