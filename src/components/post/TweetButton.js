import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';

const TweetButton = props => {
    const tweet = `“${props.articleTitle}” by Sean McPherson (@_seanmcp)  ̶ ${
        props.articleHref
    }`;
    const href = `https://twitter.com/intent/tweet?text=${tweet}`;
    return (
        <a className="TweetButton" href={href} target="_blank">
            <Icon className={'TweetButton__icon'} icon={'Twitter'} />
            <span className="TweetButton__text">Share</span>
        </a>
    );
};

TweetButton.propTypes = {
    articleHref: PropTypes.string.isRequired,
    articleTitle: PropTypes.string.isRequired
};

export default TweetButton;
