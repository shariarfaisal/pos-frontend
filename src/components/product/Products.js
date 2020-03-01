import React from 'react'

const Products = (props) => {
return(
  <div className="col-lg-10">
    <div className="list-group">

      <div className="list-group-item light-border p-3 my-2 rounded-0">
        <h4><a className="text-info" href="/">Mobile</a></h4>
        <small><a href="">items <span className="badge badge-info">10</span></a></small>
      </div>
      <div className="list-group-item light-border p-3 my-2 rounded-0">
        <h4><a className="text-info" href="/">Laptop</a></h4>
        <small><a href="">items <span className="badge badge-info">10</span></a></small>
      </div>

    </div>
  </div>
  )
}
export default Products
