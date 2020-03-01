import React from 'react'
import Core from '../../layouts/Core'
import BrandCreate from '../../components/brand/Create'

const Create = (props) => {
return(
  <Core>
    <div className="employee-create">
      <div className="row justify-content-center">
          <BrandCreate />
      </div>
    </div>
  </Core>
  )
}
export default Create
