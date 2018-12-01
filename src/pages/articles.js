import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import ArticleCategories from '../components/common/ArticleCategories';
import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostPreview from '../components/post/PostPreview';

const Articles = props => {
    const siteTitle = get(props, 'data.site.siteMetadata.title');
    const siteDescription = get(props, 'data.site.siteMetadata.description');
    const posts = get(props, 'data.allMarkdownRemark.edges');
    const categories = get(props, 'data.allMarkdownRemark.group');

    return (
        <Layout location={props.location} title={siteTitle}>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: siteDescription }]}
                title={`Articles - ${siteTitle}`}
            />
            <PageHeader>
                <h1>Articles</h1>
                {categories && <ArticleCategories list={categories} />}
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
                    title={get(node, 'frontmatter.title') || node.fields.slug}
                />
            ))}
        </Layout>
    );
};

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
                        category
                        date(formatString: "MMMM DD, YYYY")
                        summary
                        tags
                        title
                    }
                }
            }
            group(field: frontmatter___category) {
                fieldValue
                totalCount
            }
        }
    }
`;
