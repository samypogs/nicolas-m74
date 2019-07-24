import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { TimelineMax } from 'gsap'
import Slider from "react-slick";

class GalleryPage extends React.Component {
      
  constructor(props) {
    super(props)

    this.verticalAnimation = this.verticalAnimation.bind(this)
    this.message = this.message.bind(this)

    this.layoutContents = React.createRef()
    this.transitionCover = React.createRef()
    this.post = this.props.data.markdownRemark;

    this.gallery = this.post.frontmatter.gallery_image;
  }

  componentDidMount() {
    new TimelineMax().fromTo(
        this.layoutContents,
        1,
        { y: '10%' },
        { y: '0%' }
      )
  }

  componentWillUnmount() {
    new TimelineMax().fromTo(
        this.layoutContents,
        1,
        { y: '0%' },
        { y: '10%' }
      )
  }

  verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === 'up' ? '-100%' : '100%'
    const directionFrom = direction === 'up' ? '100%' : '-100%'

    // convert ms to s for gsap
    const seconds = length

    return new TimelineMax()
      .set(this.transitionCover, { y: directionFrom })
      .to(this.transitionCover, seconds / 2, {
        y: '0%'
      })
      .set(this.layoutContents, { opacity: 0 })
      .to(this.transitionCover, seconds / 2, {
        y: directionTo
      })
  }

  test(entry, node) {
    return new TimelineMax().staggerFrom(
      node.querySelectorAll('h2, p, a, pre'),
      1,
      { opacity: 0, y: '+=50' },
      0.1
    )
  }

  message() {

  }

      
    
    render(){
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          adaptiveHeight: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
            <Layout title={`M74 | Gallery |  ${this.post.frontmatter.title}`} description={this.post.frontmatter.description}>
                <section className="section__holder"  ref={n => (this.layoutContents = n)}>
                    <Slider {...settings}>
                        {this.gallery && this.gallery.map((node, i) => (
                            <div key={i}>
                                <img src={node.image.childImageSharp.fluid.src} alt={node.title} />
                                <p style={{padding: '10px 0'}}>{node.description}</p>
                            </div>
                        ))}
                    </Slider>
                </section>
            </Layout>
        )
    }
}

export default GalleryPage

export const pageQuery = graphql`
 query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
       html
       frontmatter {
        title
        gallery_image{
            image {
                childImageSharp {
                    fluid(maxWidth: 1300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
            }
            title
            description
          }
        description
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
   }
}`