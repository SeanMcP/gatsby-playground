import React from 'react';
import PropTypes from 'prop-types';

import SearchLink from '../common/SearchLink';

const PostFooter = (props) => (
    <footer className="PostFooter">
        <section className="PostFooter__section">
            <span className="PostFooter__label">Category:</span>
            <SearchLink
                queryKey={'category'}
                queryValue={props.category}
            />
        </section>
        <section className="PostFooter__section">
            <span className="PostFooter__label">Tags:</span>
            {props.tags.map(tag => (
                <SearchLink
                    key={tag}
                    queryKey={'tag'}
                    queryValue={tag}
                />
            ))}
        </section>
    </footer>
);

PostFooter.propTypes = {
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostFooter;