import React from 'react'

class Note extends React.Component {
  render() {
    return (
      <>
        <main className="c-main">
          <div className="container-fluid">
            <div className="fade-in">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">Traffic &amp; Sales</div>
                    <div className="card-body">

                      <table className="table table-responsive-sm table-hover table-outline mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th className="text-center">
                              <svg className="c-icon">
                                <use
                                  href="vendors/@coreui/icons/svg/free.svg#cil-people">
                                </use>
                              </svg>
                            </th>
                            <th>User</th>
                            <th className="text-center">Country</th>
                            <th>Usage</th>
                            <th className="text-center">Payment Method</th>
                            <th>Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">
                              <div className="c-avatar"><img className="c-avatar-img"
                                src="assets/img/avatars/1.jpg"
                              /><span
                                className="c-avatar-status bg-success"></span></div>
                            </td>
                            <td>
                              <div>Yiorgos Avraamu</div>
                              <div className="small text-muted"><span>New</span> | Registered: Jan
                                                            1, 2015</div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use href="vendors/@coreui/icons/svg/flag.svg#cif-us">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>50%</strong></div>
                                <div className="float-right"><small className="text-muted">Jun 11,
                                                                    2015 - Jul 10, 2015</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-success" role="progressbar"
                                  style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0}
                                  aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use
                                  href="vendors/@coreui/icons/svg/brand.svg#cib-cc-mastercard">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div><strong>10 sec
                                                            ago</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="c-avatar"><img className="c-avatar-img"
                                src="assets/img/avatars/2.jpg"
                              /><span
                                className="c-avatar-status bg-danger"></span></div>
                            </td>
                            <td>
                              <div>Avram Tarasios</div>
                              <div className="small text-muted"><span>Recurring</span> |
                                                            Registered: Jan 1, 2015</div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use href="vendors/@coreui/icons/svg/flag.svg#cif-br">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>10%</strong></div>
                                <div className="float-right"><small className="text-muted">Jun 11,
                                                                    2015 - Jul 10, 2015</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-info" role="progressbar"
                                  style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0}
                                  aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use
                                  href="vendors/@coreui/icons/svg/brand.svg#cib-cc-visa">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div><strong>5 minutes
                                                            ago</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="c-avatar"><img className="c-avatar-img"
                                src="assets/img/avatars/3.jpg"
                              /><span
                                className="c-avatar-status bg-warning"></span></div>
                            </td>
                            <td>
                              <div>Quintin Ed</div>
                              <div className="small text-muted"><span>New</span> | Registered: Jan
                                                            1, 2015</div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use href="vendors/@coreui/icons/svg/flag.svg#cif-in">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>74%</strong></div>
                                <div className="float-right"><small className="text-muted">Jun 11,
                                                                    2015 - Jul 10, 2015</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-warning" role="progressbar"
                                  style={{ width: '74%' }} aria-valuenow={74} aria-valuemin={0}
                                  aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use
                                  href="vendors/@coreui/icons/svg/brand.svg#cib-cc-stripe">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div><strong>1 hour
                                                            ago</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="c-avatar"><img className="c-avatar-img"
                                src="assets/img/avatars/4.jpg"
                              /><span
                                className="c-avatar-status bg-secondary"></span></div>
                            </td>
                            <td>
                              <div>Enéas Kwadwo</div>
                              <div className="small text-muted"><span>New</span> | Registered: Jan
                                                            1, 2015</div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use href="vendors/@coreui/icons/svg/flag.svg#cif-fr">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>98%</strong></div>
                                <div className="float-right"><small className="text-muted">Jun 11,
                                                                    2015 - Jul 10, 2015</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-danger" role="progressbar"
                                  style={{ width: '98%' }} aria-valuenow={98} aria-valuemin={0}
                                  aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use
                                  href="vendors/@coreui/icons/svg/brand.svg#cib-cc-paypal">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div><strong>Last
                                                            month</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="c-avatar"><img className="c-avatar-img"
                                src="assets/img/avatars/5.jpg"
                              /><span
                                className="c-avatar-status bg-success"></span></div>
                            </td>
                            <td>
                              <div>Agapetus Tadeáš</div>
                              <div className="small text-muted"><span>New</span> | Registered: Jan
                                                            1, 2015</div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use href="vendors/@coreui/icons/svg/flag.svg#cif-es">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>22%</strong></div>
                                <div className="float-right"><small className="text-muted">Jun 11,
                                                                    2015 - Jul 10, 2015</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-info" role="progressbar"
                                  style={{ width: '22%' }} aria-valuenow={22} aria-valuemin={0}
                                  aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use
                                  href="vendors/@coreui/icons/svg/brand.svg#cib-cc-apple-pay">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div><strong>Last
                                                            week</strong>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <div className="c-avatar"><img className="c-avatar-img"
                                src="assets/img/avatars/6.jpg"
                              /><span
                                className="c-avatar-status bg-danger"></span></div>
                            </td>
                            <td>
                              <div>Friderik Dávid</div>
                              <div className="small text-muted"><span>New</span> | Registered: Jan
                                                            1, 2015</div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use href="vendors/@coreui/icons/svg/flag.svg#cif-pl">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>43%</strong></div>
                                <div className="float-right"><small className="text-muted">Jun 11,
                                                                    2015 - Jul 10, 2015</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-success" role="progressbar"
                                  style={{ width: '43%' }} aria-valuenow={43} aria-valuemin={0}
                                  aria-valuemax={100}></div>
                              </div>
                            </td>
                            <td className="text-center">
                              <svg className="c-icon c-icon-xl">
                                <use
                                  href="vendors/@coreui/icons/svg/brand.svg#cib-cc-amex">
                                </use>
                              </svg>
                            </td>
                            <td>
                              <div className="small text-muted">Last login</div>
                              <strong>Yesterday</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Note
