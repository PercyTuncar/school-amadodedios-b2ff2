import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './Nav.css'




export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()
  // keyboard events
  handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.state.active && this.handleMenuToggle()
    }
  }

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })
  keyToggleSubNav = (e, subNav) => {
    // key o is for open so you can enter key to open
    if (e.keyCode === 79 || e.keyCode === 27) {
      this.toggleSubNav(subNav)
    }
  }
  render() {
    const { active } = this.state,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          onKeyDown={this.handleLinkKeyDown}
          tabIndex={0}
          aria-label="Navigation"
          role="button"
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link className="logoamadodedios"
            to="/"
            onClick={this.handleLinkClick}
            onKeyDown={this.handleLinkKeyDown}
            tabIndex={0}
            aria-label="Navigation"
            role="button"
          >
          <p>AMADO DE <span>DIOS</span></p>
          </Link>
          <div className="Nav--Links">
            <NavLink to="/">INICIO</NavLink>
            <NavLink to="/nosotros/">NOSOTROS</NavLink>
            <NavLink to="/historia/">HISTORIA</NavLink>
            <NavLink to="/blog/">NOTICIAS</NavLink>
            <NavLink to="/galeria/">GALERÍA</NavLink>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('inicial') ||
                  this.props.location.pathname.includes('primaria') ||
                  this.props.location.pathname.includes('secundaria') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
                onKeyDown={e => this.keyToggleSubNav(e, 'posts')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
              >
                NIVELES
                <div className="Nav--GroupLinks">
                  <NavLink to="/inicial/" className="Nav--GroupLink">
                    Inicial
                  </NavLink>
                  <NavLink to="/primaria/" className="Nav--GroupLink">
                    Primaria
                  </NavLink>
                  <NavLink to="/secundaria/" className="Nav--GroupLink">
                    Secundaria
                  </NavLink>
                  {/* {subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={'posts-subnav-link-' + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))} */}
                </div>
              </span>

          
            </div>
           

            <NavLink className="libro" to="/librodereclamaciones/">LIBRO DE RECLAMACIONES</NavLink>
{/* 
            <NavLink to="/default/">Default</NavLink>
            <NavLink to="/contact/">Contact</NavLink> */}
             <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label>
                  <input
                    type="checkbox"
                    className="cm-toggle"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                     />{' '}
                </label>
              )}
            </ThemeToggler>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
            tabIndex={0}
            aria-label="Navigation"
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)