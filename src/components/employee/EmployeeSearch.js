import React from 'react'

const EmployeeSearch = (props) => { 
  return(
    <div className="list-group-item d-flex align-items-center my-2 rounded-0 light-border">
      <form className="w-100">
        <div className="d-flex w-100">
          <input type="text" className="form-control form-control-sm w-75" value="" placeholder="Search here ..." />
          <button type="button" className="btn btn-sm btn-info px-4 mx-3">search</button>
        </div>
      </form>
    </div>
  )
}


export default EmployeeSearch
