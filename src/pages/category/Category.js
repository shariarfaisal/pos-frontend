import React from 'react'
import Core from '../../layouts/Core'
import CreateCategory from '../../components/category/Create'
import Items from '../../components/category/Items'
import CategoryContextProvider from '../../store/CategoryContext'


const Category = (props) => {
return(
  <CategoryContextProvider>
    <Core>
      <div className="category">
        <div className="row justify-content-center">
          <Items />
        </div>
      </div>
    </Core>
  </CategoryContextProvider>
  )
}
export default Category
