import React from 'react'
import { Link } from 'react-router-dom'

const getLogout = e => {
  const employee = localStorage.getItem('employee-token')
  if(employee){
    localStorage.removeItem('employee-token')
  }else{
    localStorage.removeItem('branch-token')
  }
  window.location = '/'
}

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
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="#">Settings</Link></li>
              <li onClick={getLogout}><Link to="#">Logout</Link></li>
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
