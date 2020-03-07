import React from 'react'

const BrandItem = ({ _id, name, code }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-2 light-border">
        <h6><a className="text-dark" href={`/brand/${_id}`}>{name}</a></h6>
        <small className="text-muted">@{code}</small>
      </div>
    </div>
  )
}
 
export default BrandItem
