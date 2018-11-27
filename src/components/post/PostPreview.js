import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import PostDate from './PostDate';
import PostFooter from './PostFooter';

const PostPreview = (props) => (
    <article className={`PostPreview ${props.condensed ? 'PostPreview--condensed' : ''}`}>
        <header className="PostPreview__header">
            <h3 className="PostPreview__title">
                <Link to={`article/${props.slug}`}>
                    {props.title}
                </Link>
            </h3>
            <PostDate date={props.date} modifier={'post-preview'} />
        </header>
        <p className="PostPreview__content" dangerouslySetInnerHTML={{ __html: props.content }} />
        {!props.condensed && (
            <PostFooter
                category={props.category}
                tags={props.tags}
            />
        )}
    </article>
);

PostPreview.propTypes = {
    author: PropTypes.string.isRequired,
    condensed: PropTypes.bool,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default PostPreview;