import React from 'react'

const Items = (props) => {
return(
  <div className="category-items col-12 col-xl-11 my-5">
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="p-2 light-border">
          <h6><a className="text-dark" href="/products/123j4k5j4kjbjk534jk3">Electronics</a></h6>
          <small><a className="text-dark" href="">products</a> <span className="badge badge-info">10</span></small>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="p-2 light-border">
          <h6>Cloths</h6>
          <small><a className="text-dark" href="">products</a> <span className="badge badge-info">10</span></small>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="p-2 light-border">
          <h6>Furniture</h6>
          <small><a className="text-dark" href="">products</a> <span className="badge badge-info">10</span></small>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 my-2">
        <div className="p-2 light-border">
          <h6>Vegitable</h6>
          <small><a className="text-dark" href="">products</a> <span className="badge badge-info">10</span></small>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Items
