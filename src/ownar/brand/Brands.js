import React from 'react'
import Core from '../../layouts/Core'
import BrandsBody from '../../components/ownar/brand/Brands'
import BrandContextProvider from '../../store/BrandContext'
import ActionBrandContextProvider from '../../action/BrandContext'

const Brands = (props) => {
return(
  <BrandContextProvider>
    <ActionBrandContextProvider>
      <Core>
        <div className="employee-create">
          <div className="row justify-content-center">
            <BrandsBody />
          </div>
        </div>
      </Core>
    </ActionBrandContextProvider>
  </BrandContextProvider>
  )
}
export default Brands
