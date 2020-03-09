import React from 'react'
import Core from '../../layouts/Core'
import ImportContextProviver from '../../store/ImportContext'
import Body from '../../components/ownar/import/Import'


const Import = (props) => {
return(
  <ImportContextProviver>
    <Core>
      <div className="import">
        <div className="row justify-content-center">
          <Body />
        </div>
      </div>
    </Core>
  </ImportContextProviver>
  )
}
export default Import
