import React from 'react'
import Core from '../../layouts/Core'
import VendorCreate from '../../components/vendor/Create'

const Create = (props) => {
return(
  <Core>
    <div className="employee-create">
      <div className="row justify-content-center">
          <VendorCreate />
      </div>
    </div>
  </Core>
  )
}
export default Create
