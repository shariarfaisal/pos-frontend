import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Item = ({ _id, name, history }) => {
  return (
    <div onDoubleClick={e => history.push(`/category/${_id}`)} className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-3 light-border">
        <h6 className="m-0"><Link className="text-dark" to={`/category/${_id}`}>{name}</Link></h6>
      </div>
    </div>
  )
}


export default withRouter(Item)
