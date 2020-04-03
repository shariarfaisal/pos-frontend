import React from 'react'
import BranchLayout from '../../layouts/BranchLayout'
import Body from '../../components/branch/exportRequest/ExportRequest'

const ExportRequest = (props) => {
  return(
    <BranchLayout>
      <div className="export-request">
        <div className="row justify-content-center">
          <Body />
        </div>
      </div>
    </BranchLayout>
  )
}
export default ExportRequest
