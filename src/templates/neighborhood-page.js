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

          <div style={{margin: '50px auto', fontSize: '12px', maxWidth: '800px'}}>
            <p style={{marginBottom: '20px'}}>Studio Block M74 is located in La Colonia Guerrero, one of the oldest neighbourhoods of Mexico City, which is currently being rediscovered and reinserted into contemporary culture by its artists and intellectuals, such as Dr. Lakra, the son of highly respected artist Francisco Toledo. Historically, La Colonia Guerrero was home to the architect Rivas Mercado, the politician José Yves Limantour and the actor Cantinflas.</p>
            <p>The area is sandwiched between Santa Maria de la Ribera (Casa Wabi, Casa Equis), Colonia Juarez (Edificio Humboldt, Galeria OMR) and the Historical Centre (Bellas Artes, Diego Rivera Museum).  Studio Block M74 is thus a stone’s throw away from the city’s best museums, restaurants, ancient ruins, but also all the materials and tool shops a sculptor may need.

Studio Block M74 is right off the main avenue of Reforma and is easily accessible by car, Metro (Guerrero) and Metro Bus (Garibaldi).

</p>
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
        description
      }
    }
  }
`
