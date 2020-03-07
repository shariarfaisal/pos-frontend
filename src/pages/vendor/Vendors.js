import React from 'react'
import Core from '../../layouts/Core'
import VendorsBody from '../../components/ownar/vendor/Vendors'
import VendorContextProvider from '../../store/VendorContext'


const Vendors = (props) => {
return(
  <VendorContextProvider>
    <Core>
      <div className="employee-create">
        <div className="row justify-content-center">
          <VendorsBody />
        </div>
      </div>
    </Core>
  </VendorContextProvider>
  )
}

export default Vendors
