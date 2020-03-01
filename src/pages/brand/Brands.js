import React from 'react'
import Core from '../../layouts/Core'
import BrandsBody from '../../components/brand/Brands'

const Brands = (props) => {
return(
  <Core>
    <div className="employee-create">
      <div className="row justify-content-center">
          <BrandsBody />
      </div>
    </div>
  </Core>
  )
}
export default Brands
