import React from 'react'
import Core from '../../layouts/Core'
import ExportLocalContextProvider from '../../components/ownar/export/ExportLocalContext'
import Requests from '../../components/ownar/export/requests/Requests'

const ExportRequests = (props) => {
return(
  <ExportLocalContextProvider>
    <Core>
      <div className="export-requests">
        <div className="row justify-content-center">
          <Requests />
        </div>
      </div>
    </Core>
  </ExportLocalContextProvider>
  )
}
export default ExportRequests
