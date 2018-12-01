import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostBio from '../components/post/PostBio';
import PostDate from '../components/post/PostDate';
import PostFooter from '../components/post/PostFooter';
import PostHelmet from '../components/post/PostHelmet';

{/* <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@flickr" />
<meta name="twitter:title" content="Small Island Developing States Photo Submission" />
<meta name="twitter:description" content="View the album on Flickr." />
<meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" /> */}

class PostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        const postDescription = post.frontmatter.summary || post.excerpt;
        const postTitle = post.frontmatter.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <PostHelmet
                    postDescription={postDescription}
                    postTitle={postTitle}
                    siteTitle={siteTitle}
                />
                <article className="PostTemplate">
                    <PageHeader centered>
                        <h1>{postTitle}</h1>
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
