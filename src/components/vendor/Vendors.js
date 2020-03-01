import React from 'react'

const Vendors = (props) => {
return(
  <div className="col-xl-10">
    <div className="list-group">

      <div className="list-group-item border-0 p-3 my-2 w-75 mx-auto">
        <div>
          <form className="d-flex">
            <input type="" name="" value="" placeholder="Search" className="form-control form-control-sm" />
            <button type="button" className="btn btn-sm btn-info px-4 mx-2">search</button>
          </form>
        </div>
      </div>

      <div className="list-group-item light-border p-3 my-2 rounded-0">
        <h4><a className="text-info" href="/">Mezbah Uddin</a></h4>
        <small className="text-muted d-block"> <i className="fa fa-phone text-info"></i> 01822531439</small>
        <small className="text-muted d-block"> <i className="fa fa-envelope text-info"></i> mezbah@gmail.com</small>
      </div>
      <div className="list-group-item light-border p-3 my-2 rounded-0">
        <h4><a className="text-info" href="/">Mezbah Uddin</a></h4>
        <small className="text-muted d-block"> <i className="fa fa-phone text-info"></i> 01822531439</small>
        <small className="text-muted d-block"> <i className="fa fa-envelope text-info"></i> mezbah@gmail.com</small>
      </div>
      <div className="list-group-item light-border p-3 my-2 rounded-0">
        <h4><a className="text-info" href="/">Mezbah Uddin</a></h4>
        <small className="text-muted d-block"> <i className="fa fa-phone text-info"></i> 01822531439</small>
        <small className="text-muted d-block"> <i className="fa fa-envelope text-info"></i> mezbah@gmail.com</small>
      </div>

    </div>
  </div>
  )
}
export default Vendors
