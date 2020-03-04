import React from 'react'
import Core from '../../layouts/Core'
import BrandsBody from '../../components/brand/Brands'
import BrandContextProvider from '../../store/BrandContext'


const Brands = (props) => {
return(
  <BrandContextProvider>
    <Core>
      <div className="employee-create">
        <div className="row justify-content-center">
          <BrandsBody />
        </div>
      </div>
    </Core>
  </BrandContextProvider>
  )
}
export default Brands
