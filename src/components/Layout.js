import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { Global, css } from "@emotion/core"

import './imagehover.min.css'
import './all.sass'



const TemplateWrapper = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div>
      
      <Helmet>
        <html lang="en" />
        <title>{this.props.title ? this.props.title : 'M74'}</title>
        <meta name="description" content={this.props.description ? this.props.description : 'Simplify your life'} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={useSiteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>

      <Global
      styles={css`
      .tl-edges {
        overflow-x: unset;
        }
      `}
    />
      <div className="site-container">
        <Navbar />
        <div className="site__body-parts site__body-content">{this.props.children}</div>
        <Footer className="" />
      </div>
    </div>
  )
}
}

export default TemplateWrapper
