import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'



const ExhibitionPage = ({ data }) => {
    const { markdownRemark: post } = data
    const PostContent = HTMLContent
    return (
        <Layout>
        <div>
            <h1>{post.frontmatter.title}</h1>
        </div>
        <PostContent content={post.html } />
        </Layout>
    )
}

export default ExhibitionPage

export const pageQuery = graphql`
 query ExhibitionQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
       html
       frontmatter {
        title
        description
       }
   }
}`