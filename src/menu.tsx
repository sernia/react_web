import React from 'react'

import { BrowserRouter as Link, NavLink } from 'react-router-dom';


class Menu extends React.Component {
  render() {
    return (
      <>
        <ul className="c-sidebar-nav">
          <li className="c-sidebar-nav-item"><NavLink className="c-sidebar-nav-link" to="/">
            <svg className="c-sidebar-nav-icon">
              <use href="vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
            </svg>Home</NavLink></li>
          <li className="c-sidebar-nav-title">Theme</li>
          <li className="c-sidebar-nav-item"><NavLink className="c-sidebar-nav-link" to="/note">
            <svg className="c-sidebar-nav-icon">
              <use href="vendors/@coreui/icons/svg/free.svg#cil-drop"></use>
            </svg>ノート</NavLink></li>
          <li className="c-sidebar-nav-item"><NavLink className="c-sidebar-nav-link" to="/note">
            <svg className="c-sidebar-nav-icon">
              <use href="vendors/@coreui/icons/svg/free.svg#cil-pencil"></use>
            </svg>FreeBoard</NavLink></li>
          <li className="c-sidebar-nav-title">Components</li>
          <li className="c-sidebar-nav-item c-sidebar-nav-dropdown"><a
            className="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
            <svg className="c-sidebar-nav-icon">
              <use href="vendors/@coreui/icons/svg/free.svg#cil-puzzle"></use>
            </svg> Base</a>
            <ul className="c-sidebar-nav-dropdown-items">
              <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="base/breadcrumb.html"><span
                className="c-sidebar-nav-icon"></span> Breadcrumb</a></li>
              <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="base/cards.html"><span
                className="c-sidebar-nav-icon"></span> Cards</a></li>
              <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="base/carousel.html"><span
                className="c-sidebar-nav-icon"></span> Carousel</a></li>
              <li className="c-sidebar-nav-item"><a className="c-sidebar-nav-link" href="base/collapse.html"><span
                className="c-sidebar-nav-icon"></span> Collapse</a></li>
            </ul>
          </li>
        </ul>
      </>
    )
  }
}

export default Menu