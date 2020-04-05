import React from 'react'
import BranchLayout from '../../layouts/BranchLayout'
import Body from '../../components/branch/store/Items'
import ProductItemContextProvider from '../../store/ProductItemContext'

const Items = (props) => {
  return(
    <ProductItemContextProvider>
      <BranchLayout>
        <div className="branch-products">
          <div className="row justify-content-center">
            <Body />
          </div>
        </div>
      </BranchLayout>
    </ProductItemContextProvider>
  )
}

export default Items
