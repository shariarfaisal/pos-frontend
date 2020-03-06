import React,{ useEffect, useContext, useState} from 'react'
import ItemBlock from './ItemBlock'
import { ProductContext } from '../../../store/ProductContext'
import { ProductItemContext } from '../../../store/ProductItemContext'
import CreateBox from '../../CreateBox'
import Create from './Create'

const Items = ({ id }) => {
  const [show,setShow] = useState(false)
  const itemContext = useContext(ProductItemContext)


  return(
    <div className="product-items">
      <CreateBox setShow={setShow} title="Create New Item">
        <Create show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {itemContext.items.map((item,i) => <ItemBlock key={i} {...item} />)}
      </div>
    </div>
  )
}
export default Items
