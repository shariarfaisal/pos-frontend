import React from 'react'
import { Link } from 'react-router-dom'
import timeConverter from '../../../utils/timeConverter'
import statusControl from './statusControl'



const RequestItem = ({ _id, title, note, createdAt, status }) => {
  return (
    <div className="col-lg-6 my-2 request-item">
      <div className="gray-border">
        <div className="d-flex justify-content-between">
          <p className="mb-0">
            <Link className="text-dark" to={`/exportRequest/${_id}`}>{title}</Link>
          </p>
          <div className="pl-4">
            <span className={`badge badge-${statusControl(status)}`}>{status}</span>
          </div>
        </div>
        {note && <small className="text-muted">{note}</small>}
        <small className="d-block text-muted text-right mt-3">{timeConverter(createdAt)}</small>
      </div>
    </div>
  )
}

export default RequestItem
