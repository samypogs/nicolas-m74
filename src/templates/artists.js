import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import { TimelineMax, Power1 } from 'gsap'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class ArtistsPage extends React.Component {
      
  constructor(props) {
    super(props)

    this.verticalAnimation = this.verticalAnimation.bind(this)
    this.message = this.message.bind(this)

    this.layoutContents = React.createRef()
    this.transitionCover = React.createRef()
    this.post = this.props.data.markdownRemark;

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
        return (
            <Layout>
                <section className="section"  ref={n => (this.layoutContents = n)}>
                    <div className="container">
                        <div className="columns">
                            <div className="column is-5">
                                <img src={this.post.frontmatter.featuredimage.childImageSharp.fluid.src} alt={this.post.frontmatter.title} />
                            </div>
                            <div className="column is-7" >
                                <HTMLContent className="content" content={this.post.html} />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
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