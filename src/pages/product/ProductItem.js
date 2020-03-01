import React from 'react'
import Core from '../../layouts/Core'
import ProductItemBody from '../../components/product/ProductItem'


const ProductItem = (props) => {
return(
  <Core>
    <div className="products">
      <div className="row justify-content-center">
        <ProductItemBody />
      </div>
    </div>
  </Core>
  )
}
export default ProductItem
