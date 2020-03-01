import React from 'react'

const Home = (props) => {
return(
  <div className="col-lg-10 employee-home">
    <div className="list-group">

      <div className="list-group-item d-flex align-items-center my-2 rounded-0 light-border">
        <form className="w-100">
          <div className="d-flex w-100">
            <input type="text" className="form-control form-control-sm w-75" value="" placeholder="Search here ..." />
            <button type="button" className="btn btn-sm btn-info px-4 mx-3">search</button>
          </div>
        </form>
      </div>

      <div className="list-group-item d-flex align-items-center my-2 rounded-0 light-border">
        <div className="left">
          <img src="img/faisal.jpeg" alt="" className="rounded" width="100px"/>
        </div>
        <div className="info px-3">
          <p className="m-0 py-0"><a className="text-dark" href="/">Sharia Emon Faisal</a></p>
          <small className="text-muted">@faisal</small>
          <div className="d-flex align-items-center">
            <i className="fa fa-phone text-info"></i>
            <p className="m-0 ml-2">01822531439</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-envelope text-info"></i>
            <p className="m-0 ml-2">faisal@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="list-group-item d-flex align-items-center my-2 rounded-0 light-border">
        <div className="left">
          <img src="img/faisal.jpeg" alt="" className="rounded" width="100px"/>
        </div>
        <div className="info px-3">
          <p className="m-0 py-0"><a className="text-dark" href="/">Sharia Emon Faisal</a></p>
          <small className="text-muted">@faisal</small>
          <div className="d-flex align-items-center">
            <i className="fa fa-phone text-info"></i>
            <p className="m-0 ml-2">01822531439</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-envelope text-info"></i>
            <p className="m-0 ml-2">faisal@gmail.com</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}
export default Home
