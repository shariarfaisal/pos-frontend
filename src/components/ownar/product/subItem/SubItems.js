import React,{ useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductSubItemContext } from '../../../../store/ProductSubItemContext'
import Item from './Item'
import Create from './Create'
import CreateBox from '../../../CreateBox'
import ImportBar from './ImportBar'


const SubItems = (props) => {
  const [show,setShow] = useState(false)
  const context = useContext(ProductSubItemContext)

  return(
    <div className="product-subItems" style={{position: 'relative'}}>
      <ImportBar />
      <CreateBox setShow={setShow} title="Create New Item">
        <Create show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {context.subItems.map((sub,i) => <Item key={i} {...sub} />)}
      </div>
    </div>
  )
}
export default SubItems
