import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const PostHelmet = ({
    postDescription,
    postImageUrl,
    postTitle,
    siteTitle
}) => (
    <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: postDescription }]}
        title={`${postTitle} | ${siteTitle}`}
    >
        <meta name="twitter:card" content={postDescription} />
        <meta name="twitter:site" content="@_seanmcp" />
        <meta name="twitter:title" content={postTitle} />
        {/* <meta name="twitter:description" content="View the album on Flickr." /> */}
        {postImageUrl && <meta name="twitter:image" content={postImageUrl} />}
    </Helmet>
);

PostHelmet.propTypes = {
    postDescription: PropTypes.string.isRequired,
    postImageUrl: PropTypes.string,
    postTitle: PropTypes.string.isRequired,
    siteTitle: PropTypes.string.isRequired
};

export default PostHelmet;
