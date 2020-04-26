import React from 'react'
import Core from '../../layouts/Core'
import BrandsBody from '../../components/ownar/brand/Brands'
import BrandContextProvider from '../../store/BrandContext'
import ActionBrandContextProvider from '../../action/BrandContext'
import BrandLocalContextProvider from '../../components/ownar/brand/BrandLocalContext'

const Brands = (props) => {
return(
  <BrandContextProvider>
    <ActionBrandContextProvider>
      <BrandLocalContextProvider>
        <Core>
          <div className="employee-create">
            <div className="row justify-content-center">
              <BrandsBody />
            </div>
          </div>
        </Core>
      </BrandLocalContextProvider>
    </ActionBrandContextProvider>
  </BrandContextProvider>
  )
}
export default Brands
