import React from 'react';
import PropTypes from 'prop-types';

import PostDate from './PostDate';
import CategoryLink from '../common/CategoryLink';
import TagLinks from '../common/TagLinks';

const PostFooter = ({ category, date, modifier, tags }) => (
    <footer
        className={`PostFooter ${modifier ? `PostFooter--${modifier}` : ''}`}
    >
        {date && <PostDate date={date} modifier="post-footer" />}
        {category && <CategoryLink category={category} />}
        <TagLinks modifier={'post-footer'} tags={tags} />
    </footer>
);

PostFooter.propTypes = {
    date: PropTypes.string,
    modifier: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostFooter;
