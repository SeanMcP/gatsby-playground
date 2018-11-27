import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'react-feather';

import PostDate from './PostDate';
import SearchLink from '../common/SearchLink';
import TagLinks from '../common/TagLinks';

const PostFooter = (props) => (
    <footer className="PostFooter">
        <PostDate date={props.date} modifier="post-footer" />
        <TagLinks modifier={'post-footer'} tags={props.tags} />
    </footer>
);

PostFooter.propTypes = {
    date: PropTypes.string.isRequired,
    // category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostFooter;