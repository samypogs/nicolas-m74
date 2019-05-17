import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo-m74.svg";
import { graphql, StaticQuery } from 'gatsby'



const MenuDropDownTemplate = class extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
      const { data, filter } = this.props
      const { edges: pages } = data.allMarkdownRemark
      
      let template = '';
      return (
      <ul className="sub-menu">
        {pages &&
          pages.map(({ node, i }) => (
            node.frontmatter.templateKey === filter ?  <li key={node.id}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li> : ''
          ))}
      </ul>
    )
  }
}

const Navbar = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }


  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  changeText = (text, e) => {
    // toggle the active boolean in the state
    e.target.textContent = text;
  };

  render() {
    return (
      <div className="site-header site__body-parts">
        <div className="logo__container">
          <Link to="/" className="header__logo" title="Logo">
            <img src={logo} alt="Kaldi" className="image" />
          </Link>
        </div>
        <nav
          className="main-navigation"
          role="navigation"
          aria-label="main-navigation"
        >
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${
                  this.state.navBarActiveClass
                }`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <ul id="navMenu" className={`header-menu ${this.state.navBarActiveClass}`}>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/mission"
                  state={{ hovering: false }}
                  onMouseOver={e => this.changeText("Mission", e)}
                  onMouseLeave={e => this.changeText("Misión", e)}
                >
                  Misión
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/studios"
                  onMouseOver={e => this.changeText("Studios", e)}
                  onMouseLeave={e => this.changeText("Talleres", e)}
                >
                  Talleres
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/artists"
                  onMouseOver={e => this.changeText("Sculptors", e)}
                  onMouseLeave={e => this.changeText("Escultores", e)}
                >
                  Escultores
                </Link>

                <MenuDropDownTemplate data={this.props.data} filter="artists" />
              </li>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/products"
                  onMouseOver={e => this.changeText("Galleries", e)}
                  onMouseLeave={e => this.changeText("Galerías", e)}
                >
                  Galerías
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/products"
                  onMouseOver={e => this.changeText("Exhibitions", e)}
                  onMouseLeave={e => this.changeText("Exhibiciones", e)}
                >
                  Exhibiciones
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/products"
                  onMouseOver={e => this.changeText("Library", e)}
                  onMouseLeave={e => this.changeText("Librería", e)}
                >
                  Librería
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/products"
                  onMouseOver={e => this.changeText("The Neighbourhood", e)}
                  onMouseLeave={e => this.changeText("La Colonia", e)}
                >
                  La Colonia
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="menu-item-link"
                  to="/contact"
                  onMouseOver={e => this.changeText("Contact", e)}
                  onMouseLeave={e => this.changeText("Contactos", e)}
                >
                  Contactos
                </Link>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title,templateKey
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Navbar data={data} />}
  />
)