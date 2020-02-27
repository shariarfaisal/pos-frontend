import React from 'react'

const Content = ({ children }) => {
return(
  <div id="content">
    <header className="header bg-info sticky-top">
      <div className="navigation d-flex">
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#"> <i className="fa fa-bell"></i></a>
          </li>
          <li className="nav-item  custom-dropdown">
            <a className="nav-link" href="#"> <i className="fa fa-user"></i> shariarfaisal</a>
            <ul className="custom-dropdown--menu bg-info">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="location">
        <ol className="breadcrumb rounded-0">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item active">category</li>
        </ol>
      </div>
    </header>

    <div className="main">
      {children}
    </div>
  </div>
  )
}
export default Content
