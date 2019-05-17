import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

const StudiosPage = ({ data }) => {
    const { markdownRemark: post } = data
    return (
        <Layout>
        <div>
            <h1>{post.frontmatter.title}</h1>
        </div>
        <HTMLContent content={post.html } />
        </Layout>
    )
}

export default StudiosPage

export const pageQuery = graphql`
 query StudiosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
       html
       frontmatter {
        title
        description
       }
   }
}`