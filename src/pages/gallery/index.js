import React from 'react'
import Layout from '../../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const ArtistLanding = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, filter } = this.props
    const { edges: pages } = data.allMarkdownRemark
    return (
      <Layout title={`M74 | Sculptor`}>
        <section className="section__holder">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {pages && pages.map(({ node, i }) => (
                node.frontmatter.templateKey === 'gallery' ?  
                <div className="column is-4" key={node.id}>
                  <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item" to={node.fields.slug}>
                  
                    <figure className="imghvr-push-up">
                        <img src={node.frontmatter.featuredimage.childImageSharp.fluid.src} alt={node.frontmatter.title} />
                  
                        <figcaption className="figure-caption">
                            <h2>{node.frontmatter.title}</h2>
                            <div className="figure-caption__description">{node.frontmatter.title}</div>
                            <p><button className="button is-black">Read More</button></p>
                        </figcaption>
                    </figure>
                  
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
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title,templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
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
    render={data => <ArtistLanding data={data}/>}
  />
)