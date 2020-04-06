import React from 'react'

const EmployeeSearch = (props) => {
  return(
    <div className="employee-search">
      <div className="row justify-content-end">
        <div className="col-lg-6 d-flex">
          <input className="form-control form-control-sm" type="text" value="" placeholder="Search" />
          <button type="button" className="btn btn-sm btn-light-blue mx-2">search</button>
        </div>
      </div>
    </div>
  )
}


export default EmployeeSearch
