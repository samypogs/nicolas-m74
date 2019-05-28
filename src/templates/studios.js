import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Slider from "react-slick";

class StudiosPage extends React.Component {
      
  constructor(props) {
    super(props)

    this.layoutContents = React.createRef()
    this.transitionCover = React.createRef()
    this.post = this.props.data.markdownRemark;
    this.gallery = this.post.frontmatter.gallery_image;
  }
      
    
    render(){
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          fade: true,
          adaptiveHeight: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
            <Layout title={`M74 | Studios |  ${this.post.frontmatter.title}`} description={this.post.frontmatter.description}>
                <section className="section__holder"  ref={n => (this.layoutContents = n)}>
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">

                              
                              <Slider {...settings}>
                                  {this.gallery && this.gallery.map((node, i) => (
                                      <div key={i}>
                                          <img src={node.image.childImageSharp.fluid.src} alt={node.title} />
                                          <p style={{padding: '10px 0'}}>{node.description}</p>
                                      </div>
                                  ))}
                              </Slider>
                            </div>
                            <div className="column is-6" >
                              <div className="stick-top" style={{marginTop: '20px'}}>
                                <HTMLContent className="content" content={this.post.html} />
                              </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default StudiosPage

export const pageQuery = graphql`
 query StudiosPage($id: String!) {
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
        gallery_image{
            image {
                childImageSharp {
                    fluid(maxWidth: 1300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
            title
          }
        description
       }
   }
}`