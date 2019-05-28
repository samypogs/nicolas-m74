import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'



const ExhibitionPage = ({ data }) => {
    const { markdownRemark: post } = data
    const PostContent = HTMLContent
    const MetaTitle = post.frontmatter.current ? 'Current' : 'Past'
    return (
        <Layout title={`M74 | Exhibition | ${MetaTitle} | ${post.frontmatter.title}`}>
            <section className="section__holder">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6">
                            {post.frontmatter.featuredimage.childImageSharp.fixed
                                ? <img src={post.frontmatter.featuredimage.childImageSharp.fixed.src}
                                        alt={post.frontmatter.title}
                                    />
                                : <img src={post.frontmatter.featuredimage.publicURL}
                                        alt={post.frontmatter.title} 
                                />
                            }
                        </div>
                        <div className="column is-6">
                            
                            <h2 className="section__title">{post.frontmatter.title} </h2>
                            <PostContent content={post.html } />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ExhibitionPage

export const pageQuery = graphql`
 query ExhibitionQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
       html
       frontmatter {
         title, templateKey, current
         featuredimage {
           childImageSharp {
             fixed(width: 800, height: 800) {
                 ...GatsbyImageSharpFixed
             }
           }
         }
       }
   }
}`