import React from 'react'
import {Link } from 'react-router-dom'

const ItemBlock = ({ name, _id, code }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-2 light-border">
        <h6><Link className="text-dark" to={`/item/${_id}`}>{name}</Link></h6>
        <small className="text-muted">@{code}</small>
      </div>
    </div>
  )
}

export default ItemBlock
