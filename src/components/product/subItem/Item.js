import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ name, _id  }) => {
  return(
    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-3 light-border">
        <h6 className="m-0"><Link className="text-dark" to={`/item/${_id}`}>{name}</Link></h6>
      </div>
    </div>
  )
}


export default Item
