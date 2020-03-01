import React from 'react'
import Core from '../../layouts/Core'
import ItemsBody from '../../components/item/Items'


const Items = (props) => {
return(
  <Core>
    <div className="products">
      <div className="row justify-content-center">
        <ItemsBody />
      </div>
    </div>
  </Core>
  )
}
export default Items
