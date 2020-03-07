import React from 'react'
import Core from '../../layouts/Core'
import ProductBody from '../../components/ownar/product/Product'
import ProductContextProvider from '../../store/ProductContext'
import ProductItemContextProvider from '../../store/ProductItemContext'
import BrandContextProvider from '../../store/BrandContext'


const Product = (props) => {
return(
  <ProductContextProvider>
    <ProductItemContextProvider>
      <BrandContextProvider>
        <Core>
          <div className="products">
            <div className="row justify-content-center">
              <ProductBody />
            </div>
          </div>
        </Core>
      </BrandContextProvider>
    </ProductItemContextProvider>
  </ProductContextProvider>
  )
}
export default Product
