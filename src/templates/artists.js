import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'



const ArtistsPage = ({ data }) => {
    const { markdownRemark: artists } = data
    console.log(data);
    return (
        <Layout>
        <div>
            <h1>{artists.frontmatter.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{__html: artists.html }} />
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