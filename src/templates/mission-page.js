import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const MissionPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-8">
            <div className="section">
              <img src={image} />
            </div>
          </div>
          
          <div className="column is-8">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MissionPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)

  return (
    <Layout>
      <MissionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.image}
        content={post.html}
      />
    </Layout>
  )
}

MissionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MissionPage

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
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
