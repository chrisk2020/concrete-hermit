import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from 'emotion';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const Headline = styled.h1`${tw`font-title font-normal text-3xl my-24`};`
const Title = styled.h3`${tw`font-title font-normal text-3xl mt-0`};`
const Content = styled.div`${tw`border-t border-b-0 border-l-0 border-r-0 border-grey border-solid`};`
const Meta = styled.small`${tw`font-mono mb-6 inline-block`};`
const titleLink = css(tw`no-underline text-black`)

class IndexPage extends React.Component {
  
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section>
        <Headline>Beautiful Interactive experiences</Headline>
          <div className="container">
            {posts
              .map(({ node: post }) => (
                <Content
                  key={post.id}
                >
                  <Meta>{post.frontmatter.date}</Meta>
                  <Title>
                    <Link className={titleLink} to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </Title>
                  <p>
                    <Link className={titleLink} to={post.fields.slug}>
                      +
                    </Link>
                  </p>
                </Content>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
