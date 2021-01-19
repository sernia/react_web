import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello'

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
          <div className="c-sidebar-brand d-lg-down-none">
            <svg className="c-sidebar-brand-full" width="118" height="46">
              <use></use>
            </svg>
            <svg className="c-sidebar-brand-minimized" width="46" height="46">
              <use href="assets/brand/coreui.svg#signet"></use>
            </svg>
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<Menu />, document.querySelector('#menu'))