import React from 'react'
import Layout from '../../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Slider from "react-slick"



const ExhibitionLanding = class extends React.Component {
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
        <section className="section__holder">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-6">
                  <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item" to="/exhibitions/current">
                    
                  <div className="gallery-list__item">
                      <Slider {...settings}>
                          {pages && pages.map(({ node }) => ( 
                            node.frontmatter.templateKey === 'exhibitions' && node.frontmatter.current ? 
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
                            : ''
                          ))}
                      </Slider>

                      
                      <div className="gallery-list__item-description">
                          <h2>Actual</h2>
                      </div>
                  </div>




                  </AniLink>
              </div>
              <div className="column is-6">
                  <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item" to="/exhibitions/past">
                    <div className="gallery-list__item">
                        <Slider {...settings}>
                            {pages && pages.map(({ node }) => ( 
                              node.frontmatter.templateKey === 'exhibitions'? 
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
                              : ''
                            ))}
                        </Slider>

                        
                        <div className="gallery-list__item-description">
                            <h2>Anteriories</h2>
                        </div>
                    </div>
                    
                  </AniLink>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns is-multiline">
              {pages && pages.map(({ node, i }) => (
                node.frontmatter.templateKey === 'exhibitions' ?  
                <div className="column is-4" key={node.id}>
                  <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item" to={node.fields.slug}>
                  
                    <div className="studio-list__item">
                        {node.frontmatter.featuredimage.childImageSharp.fluid
                        ? <img src={node.frontmatter.featuredimage.childImageSharp.fluid.src}
                                alt={node.frontmatter.title}
                            />
                        : <img src={node.frontmatter.featuredimage.publicURL}
                                alt={node.frontmatter.title} 
                        />
                        }
                        
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
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title,templateKey
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
    render={data => <ExhibitionLanding data={data}/>}
  />
)

