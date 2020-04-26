import React from 'react'
import Core from '../../layouts/Core'
import ProductBody from '../../components/ownar/product/item/Product'
import ProductContextProvider from '../../store/ProductContext'
import ProductItemContextProvider from '../../store/ProductItemContext'
import BrandContextProvider from '../../store/BrandContext'
import ItemLocalContextProvider from '../../components/ownar/product/item/ItemLocalContext'

const Product = (props) => {
return(
  <ProductContextProvider>
    <ProductItemContextProvider>
      <BrandContextProvider>
        <ItemLocalContextProvider>
          <Core>
            <div className="products">
              <div className="row justify-content-center">
                <ProductBody />
              </div>
            </div>
          </Core>
        </ItemLocalContextProvider>
      </BrandContextProvider>
    </ProductItemContextProvider>
  </ProductContextProvider>
  )
}
export default Product
