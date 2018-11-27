import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import PostPreview from '../components/post/PostPreview'

class Articles extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Blog - ${siteTitle}`}
        />
        <h2>Articles</h2>
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
    )
  }
}

export default Articles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
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
`