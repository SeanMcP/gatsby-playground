import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostPreview from '../components/post/PostPreview';

class Articles extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        );
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`Articles - ${siteTitle}`}
                />
                <PageHeader>
                    <h1>Articles</h1>
                    <p>
                        I usually write about software development with a focus
                        on JavaScript, React, and (occassionally) Python.
                    </p>
                </PageHeader>
                {posts.map(({ node }) => (
                    <PostPreview
                        author={node.frontmatter.author}
                        key={node.fields.slug}
                        category={node.frontmatter.category}
                        content={node.excerpt}
                        date={node.frontmatter.date}
                        slug={node.fields.slug}
                        tags={node.frontmatter.tags}
                        title={
                            get(node, 'frontmatter.title') || node.fields.slug
                        }
                    />
                ))}
            </Layout>
        );
    }
}

export default Articles;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { published: { eq: true } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
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
                        author
                        tags
                    }
                }
            }
        }
    }
`;
