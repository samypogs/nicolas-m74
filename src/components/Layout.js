import React from 'react'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import useSiteMetadata from './SiteMetadata'
import { Global, css } from "@emotion/core"

import './all.sass'
import './imagehover.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const TemplateWrapper = class extends React.Component {
  render() {
  return (
    <div>
      
      <Helmet>
        <html lang="en" />
        <title>{this.props.title ? this.props.title : 'M74'}</title>
        <meta name="description" content={this.props.description ? this.props.description : 'Simplify your life'} />

        <link
          rel="icon"
          href="/img/favicon.ico"
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
