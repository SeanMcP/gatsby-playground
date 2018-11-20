import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'

import get from 'lodash/get';
import isArray from 'lodash/isArray';
import capitalize from 'lodash/capitalize';

import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview'


const Search = (props) => {
    const siteTitle = get(props, 'data.site.siteMetadata.title');
    const { location: { search } } = window;
    const indexOfEquals = search.indexOf('=');
    const key = search.slice(1, indexOfEquals);
    const value = search.slice(indexOfEquals + 1);
    const allPosts = get(props, 'data.allMarkdownRemark.edges');
    const posts = allPosts.filter(({ node }) => {
        const postValue = node.frontmatter[key];
        if (isArray(postValue)) {
            return postValue.includes(value);
        } else {
            return postValue === value;
        }
    });
    return (
        <Layout location={props.location} title={siteTitle}>
            <Helmet
                title={`Search | ${siteTitle}`}
            />
            <h1>{capitalize(key)}: {value}</h1>
            {posts.map(({ node }) => (
                <PostPreview
                    key={node.fields.slug}
                    category={node.frontmatter.category}
                    content={node.excerpt}
                    date={node.frontmatter.date}
                    slug={node.fields.slug}
                    tags={node.frontmatter.tags}
                    title={get(node, 'frontmatter.title') || node.fields.slug}
                />
            ))}
        </Layout>
    );
};

export default Search;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            tags
          }
        }
      }
    }
  }
`;