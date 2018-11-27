import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'react-feather';

import PostDate from './PostDate';
import SearchLink from '../common/SearchLink';
import TagLinks from '../common/TagLinks';

const PostFooter = ({ date, tags }) => (
    <footer className="PostFooter">
        {date && <PostDate date={date} modifier="post-footer" />}
        <TagLinks modifier={'post-footer'} tags={tags} />
    </footer>
);

PostFooter.propTypes = {
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostFooter;