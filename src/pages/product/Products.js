import React from 'react'
import Core from '../../layouts/Core'
import ProductsBody from '../../components/product/Products'


const Products = (props) => {
return(
  <Core>
    <div className="products">
      <div className="row justify-content-center">
        <ProductsBody />
      </div>
    </div>
  </Core>
  )
}
export default Products
