import React from 'react'
import timeConverter from '../../../../utils/timeConverter'
import { Link } from 'react-router-dom'


const RequestHeader = ({ branch, title, createdAt, status }) => {
  return(
    <div className="request-header text-center gray-border card">
      <h4><Link className="text-dark" to={`/branch/${branch._id}`}>{branch.name}</Link> <span className="badge badge-info">{status}</span></h4>
      <p className="mb-0 text-muted">{title}</p>
      <div className="d-flex justify-content-end">
        <small className="text-muted">{timeConverter(createdAt)}</small>
      </div>
    </div>
  )
}

export default RequestHeader
