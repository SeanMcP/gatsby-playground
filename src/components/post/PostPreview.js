import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import CategoryLink from '../common/CategoryLink';
import PostFooter from './PostFooter';

const PostPreview = props => (
    <article
        className={`PostPreview ${
            props.condensed ? 'PostPreview--condensed' : ''
        }`}
    >
        <header className="PostPreview__header">
            <h3 className="PostPreview__title">
                <Link to={`articles/${props.slug}`}>{props.title}</Link>
            </h3>
            <CategoryLink category={props.category} />
        </header>
        <p
            className="PostPreview__content"
            dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <PostFooter date={props.date} tags={props.tags} />
    </article>
);

PostPreview.propTypes = {
    author: PropTypes.string,
    condensed: PropTypes.bool,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default PostPreview;
