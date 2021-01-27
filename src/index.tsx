import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Main from './main';
import Note from "./note";
import Menu from "./menu";

class App extends React.Component {
  //   componentDidMount () {
  //     const script = document.createElement("script");

  //     script.src = "";
  //     script.async = true;

  //     document.body.appendChild(script);
  // }
  render() {
    return (
      <>
        <Router>
          <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
            <div className="c-sidebar-brand d-lg-down-none">
              <svg className="c-sidebar-brand-full" width="118" height="46">
                <use href="assets/brand/coreui.svg#full"></use>
              </svg>
              <svg className="c-sidebar-brand-minimized" width="46" height="46">
                <use href="assets/brand/coreui.svg#signet"></use>
              </svg>
            </div>
            <Menu />
          </div>
          <div className="c-wrapper c-fixed-components">
            <header className="c-header c-header-light c-header-fixed c-header-with-subheader">

              <button className="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar"
                data-class="c-sidebar-show">
                <svg className="c-icon c-icon-lg">
                  <use href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
                </svg>
              </button><a className="c-header-brand d-lg-none" href="#">
                <svg width="118" height="46">
                  <use href="assets/brand/coreui.svg#full"></use>
                </svg></a>
              <button className="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar"
                data-class="c-sidebar-lg-show">
                <svg className="c-icon c-icon-lg">
                  <use href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
                </svg>
              </button>

              <ul className="c-header-nav d-md-down-none">
                <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Dashboard</a></li>
                <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Users</a></li>
                <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Settings</a></li>
              </ul>

              <ul className="c-header-nav ml-auto mr-4">
                <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
                  <svg className="c-icon">
                    <use href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                  </svg></a></li>
                <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
                  <svg className="c-icon">
                    <use href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
                  </svg></a></li>
                <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
                  <svg className="c-icon">
                    <use href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                  </svg></a></li>
                <li className="c-header-nav-item dropdown"><a className="c-header-nav-link" data-toggle="dropdown" href="#"
                  role="button" aria-haspopup="true" aria-expanded="false">
                  <div className="c-avatar"><img className="c-avatar-img" src="assets/img/avatars/6.jpg"
                    alt="user@email.com" /></div>
                </a>
                  <div className="dropdown-menu dropdown-menu-right pt-0">
                    <div className="dropdown-header bg-light py-2"><strong>Account</strong></div><a
                      className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                      </svg> Updates<span className="badge badge-info ml-auto">42</span></a><a className="dropdown-item"
                        href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                      </svg> Messages<span className="badge badge-success ml-auto">42</span></a><a
                        className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-task"></use>
                      </svg> Tasks<span className="badge badge-danger ml-auto">42</span></a><a className="dropdown-item"
                        href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"></use>
                      </svg> Comments<span className="badge badge-warning ml-auto">42</span></a>
                    <div className="dropdown-header bg-light py-2"><strong>Settings</strong></div><a
                      className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                      </svg> Profile</a><a className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
                      </svg> Settings</a><a className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"></use>
                      </svg> Payments<span className="badge badge-secondary ml-auto">42</span></a><a
                        className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-file"></use>
                      </svg> Projects<span className="badge badge-primary ml-auto">42</span></a>
                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
                      </svg> Lock Account</a><a className="dropdown-item" href="#">
                      <svg className="c-icon mr-2">
                        <use href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                      </svg> Logout</a>
                  </div>
                </li>
              </ul>
              <div className="c-subheader px-3">
                <ol className="breadcrumb border-0 m-0">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item"><a href="#">Admin</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </header>
            <div className="c-body">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/note" component={Note} />
              </Switch>
              <footer className="c-footer">
                <div> 2021 sernia</div>
                <div className="ml-auto">sernia</div>
              </footer>
            </div>
          </div>
        </Router>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));