import React from 'react'
import BranchLayout from '../../layouts/BranchLayout'
import Body from '../../components/branch/store/SubItems'
import ProductSubItemContextProvider from '../../store/ProductSubItemContext'

const SubItems = (props) => {
  return(
    <ProductSubItemContextProvider>
      <BranchLayout>
        <div className="branch-products">
          <div className="row justify-content-center">
            <Body />
          </div>
        </div>
      </BranchLayout>
    </ProductSubItemContextProvider>
  )
}

export default SubItems
