import React from 'react'
import Layout from '../../components/Layout'
import {HTMLContent} from '../../components/Content'
import { graphql, StaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Slider from "react-slick"



const PastLanding = class extends React.Component {
  render() {
    const { data } = this.props
    const { edges: pages } = data.allMarkdownRemark
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      adaptiveHeight: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Layout>
        <section className="section__holder-small">
          <div className="container">
                {pages.length === 1 ? 
                    <div className="">
                        {pages.map(({ node }) => ( 
                            <div className="columns is-multiline" key={node.id}>
                                <div className="column is-5">
                                    {node.frontmatter.featuredimage.childImageSharp.fixed
                                    ? <img src={node.frontmatter.featuredimage.childImageSharp.fixed.src}
                                            alt={node.frontmatter.title}
                                        />
                                    : <img src={node.frontmatter.featuredimage.publicURL}
                                            alt={node.frontmatter.title} 
                                    />
                                    }
                                </div>
                                <div className="column is-7">
                                    <HTMLContent content={node.html} />
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="columns is-multiline">
                        {pages.map(({ node }) => ( 
                            <div className="column is-4" key={node.id}>
                                <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item"  to={node.fields.slug}>
                                <div className="gallery-list__item">
                                    <div key={node.id}>
                                        {node.frontmatter.featuredimage.childImageSharp.fixed
                                        ? <img src={node.frontmatter.featuredimage.childImageSharp.fixed.src}
                                                alt={node.frontmatter.title}
                                            />
                                        : <img src={node.frontmatter.featuredimage.publicURL}
                                                alt={node.frontmatter.title} 
                                        />
                                        }
                                        
                                    </div>
                                    <div className="gallery-list__item-description">
                                        
                                    </div>
                                </div>
                                </AniLink>
                            </div>
                        ))}
                    </div>
                }
              <div className="column is-6">
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
        allMarkdownRemark(filter: { frontmatter:  { templateKey: { eq:"exhibitions"}, current: { eq: false}}}){
          edges {
            node {
              id
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
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <PastLanding data={data}/>}
  />
)

