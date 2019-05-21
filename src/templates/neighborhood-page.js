import React from 'react'
import PropTypes from 'prop-types'
import homeBanner from "../img/hood.png";
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


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
  
        <section className="section__holder" style={{textAlign: 'center'}}>
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
