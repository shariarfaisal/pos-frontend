import React from 'react'
import Core from '../../layouts/Core'
import ProductsBody from '../../components/ownar/product/Products'
import ProductLocalContextProvider from '../../components/ownar/product/ProductLocalContext'


const Products = (props) => {
return(
  <ProductLocalContextProvider>
    <Core>
      <div className="products">
        <div className="row justify-content-center">
          <ProductsBody />
        </div>
      </div>
    </Core>
  </ProductLocalContextProvider>
  )
}
export default Products
