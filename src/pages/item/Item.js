import React from 'react'
import Core from '../../layouts/Core'
import ItemBody from '../../components/item/Item'


const ProductItem = (props) => {
return(
  <Core>
    <div className="products">
      <div className="row justify-content-center">
        <ItemBody />
      </div>
    </div>
  </Core>
  )
}
export default ProductItem
