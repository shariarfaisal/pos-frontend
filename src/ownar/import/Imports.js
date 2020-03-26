import React from 'react'
import Core from '../../layouts/Core'
import ImportContextProviver from '../../store/ImportContext'
import VendorContextProviver from '../../store/VendorContext'
import Body from '../../components/ownar/import/Imports'


const Imports = (props) => {
return(
  <ImportContextProviver>
    <VendorContextProviver>
    <Core>
      <div className="import">
        <div className="row justify-content-center">
          <Body />
        </div>
      </div>
    </Core>
    </VendorContextProviver>
  </ImportContextProviver>
  )
}
export default Imports
