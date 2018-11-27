import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'
import get from 'lodash/get';

import Layout from '../components/Layout';
import PostPreview from '../components/post/PostPreview'

const TagTemplate = (props) => {
    const siteTitle = get(props, 'data.site.siteMetadata.title');
    const posts = get(props, 'data.allMarkdownRemark.edges');
    const { location: { pathname } } = window;
    const tag = pathname.slice(pathname.lastIndexOf('/') + 1);
    return (
        <Layout location={props.location} title={siteTitle}>
            <Helmet
                title={`Tags | ${siteTitle}`}
            />
            <h1>Tag: {tag}</h1>
            {posts.map(({ node }) => (
                <PostPreview
                    key={node.fields.slug}
                    author={node.frontmatter.author}
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

export default TagTemplate;

export const pageQuery = graphql`
    query BlogPostsByTag($tag: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } },
            sort: {fields: [frontmatter___date], order: DESC}, limit: 10
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        category
                        tags
                    }
                }
            }
        }
    }
`;