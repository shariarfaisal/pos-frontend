import React from 'react'
import Core from '../../layouts/Core'
import CreateCategory from '../../components/category/Create'

const Create = (props) => {
return(
  <Core>
    <div className="category">
      <div className="row justify-content-center">
          <CreateCategory />
      </div>
    </div>
  </Core>
  )
}
export default Create
