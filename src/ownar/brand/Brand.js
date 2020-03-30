import React from 'react'
import Core from '../../layouts/Core'
import BrandBody from '../../components/ownar/brand/Brand'
import BrandContextProvider from '../../store/BrandContext'


const Brand = (props) => {
  return(
    <BrandContextProvider>
      <Core>
        <div className="brand">
          <div className="row justify-content-center">
            <BrandBody />
          </div>
        </div>
      </Core>
    </BrandContextProvider>
  )
}
export default Brand
