import React from 'react'
import PropTypes from 'prop-types'
import homeBanner from "../img/home-banner.jpg";
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
        <div className="index-bg">
          <img src={this.props.data.markdownRemark.frontmatter.image.childImageSharp.fluid.src} className="big-image" alt="" />
        </div>
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
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
