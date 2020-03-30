import React from 'react'
import { Link, useHistory } from 'react-router-dom'


const BrandItem = ({ _id, name, code }) => {
  const history = useHistory()
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div onDoubleClick={e => history.push(`/brand/${_id}`)} className="p-2 light-border">
        <h6><Link className="text-dark" to={`/brand/${_id}`}>{name}</Link></h6>
        <small className="text-muted">@{code}</small>
      </div>
    </div>
  )
}

export default BrandItem
