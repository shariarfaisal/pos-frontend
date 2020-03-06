import React from 'react'
import Core from '../../layouts/Core'
import ProductsBody from '../../components/product/Products'
import ProductContextProvider from '../../store/ProductContext'
import CategoryContextProvider from '../../store/CategoryContext'


const Products = (props) => {
return(
  <ProductContextProvider>
    <CategoryContextProvider>
      <Core>
        <div className="products">
          <div className="row justify-content-center">
            <ProductsBody />
          </div>
        </div>
      </Core>
    </CategoryContextProvider>
  </ProductContextProvider>
  )
}
export default Products
