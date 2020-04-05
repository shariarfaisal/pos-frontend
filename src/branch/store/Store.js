import React from 'react'
import BranchLayout from '../../layouts/BranchLayout'
import Categories from '../../components/branch/store/Categories'
import CategoryContextProvider from '../../store/CategoryContext'

const Store = (props) => {
  return(
    <CategoryContextProvider>
      <BranchLayout>
        <div className="employee-create">
          <div className="row justify-content-center">
            <Categories />
          </div>
        </div>
      </BranchLayout>
    </CategoryContextProvider>
  )
}

export default Store
