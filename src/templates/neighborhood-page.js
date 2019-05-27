import React from 'react'
import PropTypes from 'prop-types'
import homeBanner from "../img/hood.png";
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'


class NeighborhoodPage extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
    console.log(this.props.data)
  }

  render(){
    return (
      <Layout title="M74" description="Simplify your life">
        <section className="section__holder" style={{textAlign: 'center', position: 'relative'}}>
          <a className="invisble_link link1" href="https://www.bibliotecavasconcelos.gob.mx/" target="_blank"></a>
          <a className="invisble_link link2" href="http://www.chopo.unam.mx/" target="_blank"></a>
          <a className="invisble_link link3" href="https://en.wikipedia.org/wiki/Dr_Lakra" target="_blank"></a>
          <a className="invisble_link link4" href="https://palacio.inba.gob.mx/" target="_blank"></a>
          <a className="invisble_link link5" href="https://museomuraldiegorivera.bellasartes.gob.mx/" target="_blank"></a>
          <a className="invisble_link link6" href="https://www.instagram.com/frontera_115/?hl=en" target="_blank"></a>

          
          
          <img src={homeBanner} className="big-image" alt="" />
        </section>
      
      </Layout>
    )
  }
}


NeighborhoodPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NeighborhoodPage

export const pageQuery = graphql`
  query NeighborhoodPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "neighborhood-page" } }) {
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`
