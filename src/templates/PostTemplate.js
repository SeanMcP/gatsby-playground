import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import CategoryLink from '../components/common/CategoryLink';
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
        <article className="BlogPost">
          <header className="PostTemplate__header">
            <h1>{post.frontmatter.title}</h1>
            <section className={'PostTemplate__details'}>
              <PostDate date={post.frontmatter.date} hideIcon />
              <span className={'PostTemplate__details-spacer'}>in</span>
              <CategoryLink queryValue={post.frontmatter.category} hideIcon />
            </section>
          </header>
          <main dangerouslySetInnerHTML={{ __html: post.html }} />
          <PostFooter
            tags={post.frontmatter.tags}
          />
          {(next || previous) && (
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
          )}
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
        date(formatString: "MMMM DD, YYYY")
        category
        author
        tags
      }
    }
  }
`
