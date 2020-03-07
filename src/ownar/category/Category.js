import React from 'react'
import Core from '../../layouts/Core'
import Items from '../../components/ownar/category/Items'
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
