import React from 'react'
import Core from '../../layouts/Core'
import ExportLocalContextProvider from '../../components/ownar/export/ExportLocalContext'
import Request from '../../components/ownar/export/request/Request'

const ExportRequest = (props) => {
return(
  <ExportLocalContextProvider>
    <Core>
      <div className="export-requests">
        <div className="row justify-content-center">
          <Request />
        </div>
      </div>
    </Core>
  </ExportLocalContextProvider>
  )
}
export default ExportRequest
