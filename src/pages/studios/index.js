import React from 'react'
import Layout from '../../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const StudiosLanding = class extends React.Component {
  render() {
    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark
    return (
      <Layout>
        <section className="section__holder">
          <div className="container">
            <div className="columns is-multiline">
              {pages && pages.map(({ node, i }) => (
                node.frontmatter.templateKey === 'studios' ?  
                <div className="column is-4" key={node.id}>
                  <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item" to={node.fields.slug}>
                  
                    <div className="studio-list__item">
                        <img src={node.frontmatter.featuredimage.childImageSharp.fixed.src} alt={node.frontmatter.title} />
                        <div className="studio-list__item-description">
                            <h2>{node.frontmatter.title}</h2>
                        </div>
                    </div>
                  
                  </AniLink>
                </div> : ''
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort:{fields:frontmatter___title, order: ASC}) {
          edges {
            node {
              id
              frontmatter {
                title,templateKey
                featuredimage {
                  childImageSharp {
                      fixed(width: 700, height: 700) {
                          ...GatsbyImageSharpFixed
                      }
                    }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <StudiosLanding data={data}/>}
  />
)