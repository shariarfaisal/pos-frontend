import React from 'react'
import Core from '../../layouts/Core'
import ItemBody from '../../components/ownar/product/item/Item'
import ProductSubItemContextProvider from '../../store/ProductSubItemContext'


const Item = (props) => {
  return(
    <ProductSubItemContextProvider>
      <Core>
        <div className="products">
          <div className="row justify-content-center">
            <ItemBody />
          </div>
        </div>
      </Core>
    </ProductSubItemContextProvider>
  )
}

export default Item
