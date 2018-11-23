import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import PostFooter from './PostFooter';

const PostPreview = (props) => (
    <article className="PostPreview">
        <h3 className="PostPreview__title">
            <Link to={props.slug}>
                {props.title}
            </Link>
        </h3>
        <small className="PostPreview__date">{props.date} by {props.author}</small>
        <p className="PostPreview__content" dangerouslySetInnerHTML={{ __html: props.content }} />
        <PostFooter
            category={props.category}
            tags={props.tags}
        />
    </article>
);

PostPreview.propTypes = {
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default PostPreview;