import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ _id, name }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-2 light-border">
        <h6><Link className="text-dark" to={`/category/${_id}`}>{name}</Link></h6>
        <small><Link className="text-muted" to={`/products/${_id}`}>products</Link></small>
      </div>
    </div>
  )
}


export default Item
