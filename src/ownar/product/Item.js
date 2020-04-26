import React from 'react'
import Core from '../../layouts/Core'
import ItemBody from '../../components/ownar/product/subItem/Item'
import ProductSubItemContextProvider from '../../store/ProductSubItemContext'
import ImportContextProvider from '../../store/ImportContext'
import SubItemLocalContextProvider from '../../components/ownar/product/subItem/SubItemLocalContext'

const Item = (props) => {
  return(
    <ProductSubItemContextProvider>
      <ImportContextProvider>
        <SubItemLocalContextProvider>
          <Core>
            <div className="products">
              <div className="row justify-content-center">
                <ItemBody />
              </div>
            </div>
          </Core>
        </SubItemLocalContextProvider>
      </ImportContextProvider>
    </ProductSubItemContextProvider>
  )
}

export default Item
