import React from 'react'
import Core from '../../layouts/Core'
import ProductCreate from '../../components/product/Create'


const Create = (props) => {
return(
  <Core>
    <div className="products">
      <div className="row justify-content-center">
        <ProductCreate />
      </div>
    </div>
  </Core>
  )
}
export default Create
