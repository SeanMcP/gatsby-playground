import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

const SearchHeader = ({ queryKey, queryValue }) => {
    const capValue = capitalize(queryValue);
    return (
        <header className="SearchHeader">
            <p className="SearchHeader__key">{queryKey}</p>
            <h1 className="SearchHeader__heading">{capValue}</h1>
            <p>
                All the articles {queryKey === 'Category' ? 'in' : 'with'} the “
                <strong>{capValue}</strong>” {queryKey.toLowerCase()}.
            </p>
        </header>
    );
};

SearchHeader.propTypes = {
    queryKey: PropTypes.string.isRequired,
    queryValue: PropTypes.string.isRequired,
};

export default SearchHeader;
