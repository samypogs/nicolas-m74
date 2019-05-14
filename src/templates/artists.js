import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'



const ArtistsPage = ({ data }) => {
    const { markdownRemark: post } = data
    console.log(data);
    return (
        <Layout>
        <div>
            <h1>{post.frontmatter.title}ffffffffffffffffffffffssssssssssss</h1>
        </div>
        <div>
            {post.html}
        </div>
        </Layout>
    )
}

export default ArtistsPage

export const pageQuery = graphql`
 query ArtistsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
       html
       frontmatter {
        title
        description
       }
   }
}`