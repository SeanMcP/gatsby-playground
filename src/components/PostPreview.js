import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

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
                <Link
                    className="PostPreview__search-link"
                    to={`search?category=${props.category}`}
                >
                    {props.category}
                </Link>
            </div>
            <div className="PostPreview__tags">
                <strong>Tags:</strong>
                {props.tags.map(tag => (
                    <Link
                        className="PostPreview__search-link"
                        key={tag}
                        to={`search?tags=${tag}`}
                    >
                        {tag}
                    </Link>
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