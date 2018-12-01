import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostBio from '../components/post/PostBio';
import PostDate from '../components/post/PostDate';
import PostFooter from '../components/post/PostFooter';

class PostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = post.excerpt;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`${post.frontmatter.title} | ${siteTitle}`}
                />
                <article className="PostTemplate">
                    <PageHeader centered>
                        <h1>{post.frontmatter.title}</h1>
                        <section className={'PostTemplate__details'}>
                            <PostDate date={post.frontmatter.date} hideIcon />
                        </section>
                    </PageHeader>
                    <main dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr />
                    <PostFooter
                        articleHref={location.href}
                        articleTitle={post.frontmatter.title}
                        category={post.frontmatter.category}
                        date={post.frontmatter.date}
                        modifier={'post-template'}
                        tags={post.frontmatter.tags}
                    />
                    <hr />
                    <PostBio />
                </article>
            </Layout>
        );
    }
}

export default PostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                category
                date(formatString: "MMMM D, YYYY")
                summary
                tags
                title
            }
        }
    }
`;
