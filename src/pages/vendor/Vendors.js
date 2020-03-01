import React from 'react'
import Core from '../../layouts/Core'
import VendorsBody from '../../components/vendor/Vendors'

const Vendors = (props) => {
return(
  <Core>
    <div className="employee-create">
      <div className="row justify-content-center">
          <VendorsBody />
      </div>
    </div>
  </Core>
  )
}
export default Vendors
