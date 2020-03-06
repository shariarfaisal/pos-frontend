import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const ProductItem = ({ name, _id, match, history }) => {
  return (
    <div onDoubleClick={e => history.push(`${match.url}/${_id}`) } className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-3 light-border">
        <h6 className="m-0"><Link className="text-dark" to={`${match.url}/${_id}`}>{name}</Link></h6>
      </div>
    </div>
  )
}


export default withRouter(ProductItem)
