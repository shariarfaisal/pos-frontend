import React,{ useContext } from 'react'
import statusControl from './statusControl'
import timeConverter from '../../../utils/timeConverter'
import { ExportRequestContext } from './ExportRequestContext'

const RequestInfo = (props) => {
  const { request } = useContext(ExportRequestContext)
  return (
    request && <div className="py-3 mb-5 text-center">
      <h4>{request.title} <span className={`ml-4 badge badge-${statusControl(request.status)}`}>{request.status}</span> </h4>
      {request.message && <p className="text-muted mb-0">{request.message}</p>}
      <small>created <span className="badge badge-warning">{timeConverter(request.createdAt)}</span></small>
    </div>
  )
}

export default RequestInfo
