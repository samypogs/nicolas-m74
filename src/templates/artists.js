import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'



const ArtistsPage = ({ data }) => {
    const { markdownRemark: artists } = data
    const PostContent = HTMLContent
    console.log(data);
    return (
        <Layout>
        <div>
            <h1>{artists.frontmatter.title}</h1>
        </div>
        <PostContent content={artists.html } />
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