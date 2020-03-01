import React from 'react'
import Core from '../../layouts/Core'
import CreateCategory from '../../components/category/Create'
import Items from '../../components/category/Items'

const Category = (props) => {
return(
  <Core>
    <div className="category">
      <div className="row justify-content-center">
          <Items />
      </div>
    </div>
  </Core>
  )
}
export default Category
