import React from 'react'
import Core from '../../layouts/Core'
import ItemBody from '../../components/ownar/product/item/Item'
import ProductSubItemContextProvider from '../../store/ProductSubItemContext'
import ImportContextProvider from '../../store/ImportContext'


const Item = (props) => {
  return(
    <ProductSubItemContextProvider>
      <ImportContextProvider>
        <Core>
          <div className="products">
            <div className="row justify-content-center">
              <ItemBody />
            </div>
          </div>
        </Core>
      </ImportContextProvider>
    </ProductSubItemContextProvider>
  )
}

export default Item
