import React from 'react'
import PropTypes from 'prop-types'
import homeBanner from "../img/hood.png";
import Layout from '../components/Layout'
import Gmap from '../components/Gmap'
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
      <Layout  title={`M74 | La Colonia`}>
        <section className="section__holder" style={{textAlign: 'center', position: 'relative'}}>
          <a className="invisble_link link1" rel="noopener noreferrer" href="https://www.bibliotecavasconcelos.gob.mx/" target="_blank"></a>
          <a className="invisble_link link2" rel="noopener noreferrer" href="http://www.chopo.unam.mx/" target="_blank"></a>
          <a className="invisble_link link3" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Dr_Lakra" target="_blank"></a>
          <a className="invisble_link link4" rel="noopener noreferrer" href="https://palacio.inba.gob.mx/" target="_blank"></a>
          <a className="invisble_link link5" rel="noopener noreferrer" href="https://museomuraldiegorivera.bellasartes.gob.mx/" target="_blank"></a>
          <a className="invisble_link link6" rel="noopener noreferrer" href="https://www.instagram.com/frontera_115/?hl=en" target="_blank"></a>

          <div className="gmap-mask">
            <Gmap />
          </div>
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
