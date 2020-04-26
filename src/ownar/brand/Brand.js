import React from 'react'
import Core from '../../layouts/Core'
import BrandBody from '../../components/ownar/brand/Brand'
import BrandContextProvider from '../../store/BrandContext'
import BrandLocalContextProvider from '../../components/ownar/brand/BrandLocalContext'

const Brand = (props) => {
  return(
    <BrandContextProvider>
      <BrandLocalContextProvider>
        <Core>
          <div className="brand">
            <div className="row justify-content-center">
              <BrandBody />
            </div>
          </div>
        </Core>
      </BrandLocalContextProvider>
    </BrandContextProvider>
  )
}
export default Brand
