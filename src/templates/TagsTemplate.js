import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet'

import Layout from '../components/Layout';

const TagTemplate = (props) => {
    return (
        <Layout title={props.data.siteTitle}>
            <Helmet
                title={`Tags | ${siteTitle}`}
            />
            <h1>Tags</h1>
        </Layout>
    );
};

export default TagTemplate;

export const pageQuery = graphql`
    query ($tag: String!) {
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
                        author
                        tags
                    }
                }
            }
        }
    }
`;