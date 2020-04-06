import React from 'react'
import ExportRequestItems from './ExportRequestItems'
import RequestInfo from './RequestInfo'
import ExportRequestContextProvider from './ExportRequestContext'


const ExportRequest = (props) => {
  return(
    <ExportRequestContextProvider>
      <div className="col-lg-11 export-request">
        <RequestInfo />
        <ExportRequestItems />
      </div>
    </ExportRequestContextProvider>
  )
}
export default ExportRequest
