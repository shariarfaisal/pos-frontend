import React from 'react'
import Core from '../../layouts/Core'
import ItemCreate from '../../components/item/Create'


const Create = (props) => {
return(
  <Core>
    <div className="products">
      <div className="row justify-content-center">
        <ItemCreate />
      </div>
    </div>
  </Core>
  )
}
export default Create
