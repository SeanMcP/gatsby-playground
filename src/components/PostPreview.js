import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import SearchLink from './common/SearchLink';

const PostPreview = (props) => (
    <article className="PostPreview">
        <h3 className="PostPreview__title">
            <Link to={props.slug}>
                {props.title}
            </Link>
        </h3>
        <small className="PostPreview__date">{props.date}</small>
        <p className="PostPreview__content" dangerouslySetInnerHTML={{ __html: props.content }} />
        <footer className="PostPreview__footer">
            <div className="PostPreview__category">
                <strong>Category:</strong>
                <SearchLink
                    queryKey={'category'}
                    queryValue={props.category}
                />
            </div>
            <div className="PostPreview__tags">
                <strong>Tags:</strong>
                {props.tags.map(tag => (
                    <SearchLink
                        key={tag}
                        queryKey={'tags'}
                        queryValue={tag}
                    />
                ))}
            </div>
        </footer>
    </article>
);

PostPreview.propTypes = {
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default PostPreview;