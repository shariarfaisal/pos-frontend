import React from 'react'
import BranchLayout from '../../layouts/BranchLayout'
import Body from '../../components/branch/store/Products'
import ProductContextProvider from '../../store/ProductContext'

const Products = (props) => {
  return(
    <ProductContextProvider>
      <BranchLayout>
        <div className="branch-products">
          <div className="row justify-content-center">
            <Body />
          </div>
        </div>
      </BranchLayout>
    </ProductContextProvider>
  )
}

export default Products
