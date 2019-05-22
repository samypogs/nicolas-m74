import React from 'react'
import Layout from '../../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Slider from "react-slick";



const ArtistLanding = class extends React.Component {
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
      <Layout title={`M74 | Sculptor`}>
        <section className="section__holder">
          <div className="container">
            <div className="columns is-multiline">
              {pages && pages.map(({ node, i }) => (
                node.frontmatter.templateKey === 'gallery' ?  
                <div className="column is-4" key={node.id}>
                  <AniLink cover direction="top" bg="#f2f2f2" className="card-list__item" to={node.fields.slug}>
                  

                    <div className="gallery-list__item">
                        <Slider {...settings}>
                            {node.frontmatter.gallery_image && node.frontmatter.gallery_image.map((result, i) => (
                                <div>
                                    {result.image.childImageSharp.fixed
                                    ? <img src={result.image.childImageSharp.fixed.src}
                                            alt={result.title}
                                        />
                                    : <img src={result.image.publicURL}
                                            alt={result.title} 
                                    />
                                    }
                                </div>
                            ))}
                        </Slider>

                        
                        <div className="gallery-list__item-description">
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
                gallery_image{
                    image {
                        childImageSharp {
                            fixed(width: 700, height: 700) {
                                ...GatsbyImageSharpFixed
                            }
                          }
                    }
                    title
                    description
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