import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { Introduction } from '../components/text/Text';
import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostPreview from '../components/post/PostPreview';

class BlogIndex extends React.Component {
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
                    title={siteTitle}
                />
                <PageHeader>
                    <h1>Hello there!</h1>
                </PageHeader>
                <Introduction />
                <h2>Recent articles</h2>
                <hr className="--short" />
                {posts.map(({ node }) => (
                    <PostPreview
                        key={node.fields.slug}
                        author={node.frontmatter.author}
                        category={node.frontmatter.category}
                        condensed
                        content={node.frontmatter.summary || node.excerpt}
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

export default BlogIndex;

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
            limit: 3
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        category
                        summary
                        tags
                        title
                    }
                }
            }
        }
    }
`;
