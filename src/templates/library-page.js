import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LibraryPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section__holder">
      <div className="columns">
        <div className="column is-7">
            <img src={image.childImageSharp.fluid.src} alt="" />
        </div>
        <div className="column is-5">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  )
}

LibraryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LibraryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title={`M74 | Library`}>
      <LibraryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

LibraryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LibraryPage

export const libraryPageQuery = graphql`
  query LibraryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        image {
          childImageSharp {
            fluid(maxWidth: 820, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
