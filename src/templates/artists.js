import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'



const ArtistsPage = ({ data }) => {
    const { markdownRemark: artists } = data
    console.log(data);
    return (
        <Layout>
            <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-5">
                        <img src={artists.frontmatter.featuredimage.childImageSharp.fluid.src} alt={artists.frontmatter.title} />
                    </div>
                    <div className="column is-7">
                        <HTMLContent className="content" content={artists.html} />
                    </div>
                </div>
            </div>
            </section>
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
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
       }
   }
}`