import React from 'react'
import CreateRequest from './CreateRequest'
import Requests from './Requests'

const ExportRequests = (props) => {
  return(
    <div className="col-lg-11 export-requests">
      <CreateRequest />
      <Requests />
    </div>
  )
}

export default ExportRequests
