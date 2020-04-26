import React,{ useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SubItemLocalContext } from './SubItemLocalContext'
import ItemBlock from './ItemBlock'
import Create from './Create'
import CreateBox from '../../../CreateBox'
import ImportBar from './ImportBar'


const SubItems = (props) => {
  const { itemId } = useParams()
  const [show,setShow] = useState(false)
  const { subItems, getSetSubItems } = useContext(SubItemLocalContext)

  useEffect(() => {
    getSetSubItems(itemId)
  },[])

  return(
    subItems && <div className="product-subItems" style={{position: 'relative'}}>
      <ImportBar />
      <CreateBox setShow={setShow} title="Create New Item">
        <Create show={show} setShow={setShow} />
      </CreateBox>
      <div className="row">
        {subItems.map((sub,i) => <ItemBlock key={i} {...sub} />)}
      </div>
    </div>
  )
}
export default SubItems
