import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const PostHelmet = ({ postDescription, postTitle, siteTitle }) => (
    <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: postDescription }]}
        title={`${postTitle} | ${siteTitle}`}
    >
        <meta name="twitter:card" content={postDescription} />
        <meta name="twitter:site" content="@_seanmcp" />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content="View the album on Flickr." />
        <meta
            name="twitter:image"
            content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
        />
    </Helmet>
);

PostHelmet.propTypes = {
    postDescription: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
    siteTitle: PropTypes.string.isRequired
};

export default PostHelmet;
