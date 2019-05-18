import React from 'react'
import PropTypes from 'prop-types'
import homeBanner from "../img/home-banner.jpg";
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


class IndexPage extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  render(){
    return (
      <Layout>
        <div className="index-bg">
          <img src={homeBanner} className="big-image" alt="" />
        </div>
      </Layout>
    )
  }
}


IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
