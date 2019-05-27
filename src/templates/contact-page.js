import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section__holder-small">
      <div className="columns">
        <div className="column is-6">
            {console.log(image)}
            {image.childImageSharp.fluid
            ? <img src={image.childImageSharp.fluid.src}
                    alt={title}
                />
            : <img src={image.childImageSharp.publicURL}
                    alt={title} 
            />
            }
        </div>
        <div className="column is-5">
            <div style={{margin: '20px'}}>
                <div style={{marginBottom: '20px',marginTop: '10px'}}>Visitas únicamente por cita.</div>
                <div style={{marginBottom: '15px'}}>Por visitarnos o por alguna información<br />
                sobre la renta de los talleres o de las galerías,<br />
                mándanos un correo a:</div>
                <div style={{marginBottom: '15px'}}><a href="mailto:info@studioblockm74.com">info@studioblockm74.com</a></div>
                <div style={{marginBottom: '15px'}}><a href="tel:+525555297958">+52 (55) 5529 7958</a></div>
                <div>Moctezuma 74</div>
                <div>Colonia Guerrero, 06300</div>
                <div>Ciudad de México</div>
                <div>México</div>
            </div>

        </div>
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
    console.log(post)
  return (
    <Layout title={`M74 | Contact`}>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        image {
          childImageSharp {
            fluid(maxWidth: 820, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
