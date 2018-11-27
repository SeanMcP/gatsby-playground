import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import PostBio from '../components/post/PostBio';
import Layout from '../components/Layout'
import PostDate from '../components/post/PostDate';
import PostFooter from '../components/post/PostFooter';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <article className="PostTemplate">
          <header className="PostTemplate__header">
            <h1>{post.frontmatter.title}</h1>
            <section className={'PostTemplate__details'}>
              <PostDate date={post.frontmatter.date} hideIcon />
            </section>
          </header>
          <main dangerouslySetInnerHTML={{ __html: post.html }} />
          <PostFooter
            category={post.frontmatter.category}
            date={post.frontmatter.date}
            modifier={'post-template'}
            tags={post.frontmatter.tags}
          />
          <PostBio />
          {/* {(next || previous) && (
            <ul>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          )} */}
        </article>
      </Layout>
    )
  }
}

export default PostTemplate

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
        title
        date(formatString: "MMMM D, YYYY")
        category
        tags
      }
    }
  }
`
