import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import CloneCorner from '../../../CloneCorner'


const ItemBlock = ({ name, _id, code, match, history  }) => {
  return(
    <div onDoubleClick={e => history.push(`${match.url}/${_id}`)} className="col-md-6 col-lg-4 my-2">
      <div className="p-3 gray-border light-shadow min-h-1">
        <div className="d-flex justify-content-between">
          <h6 className="">
            <Link className="text-dark" to={`${match.url}/${_id}`}>{name}</Link>
          </h6>
          <CloneCorner>
            <div onClick={e => history.push(`${match.url}/${_id}`)} className="item">View</div>
          </CloneCorner>
        </div>
        <small className="text-muted d-block">@{code}</small>
      </div>
    </div>
  )
}


export default withRouter(ItemBlock)
