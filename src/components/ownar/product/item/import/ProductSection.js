import React,{ memo, useState, useEffect, useContext } from 'react'
import { ProductItemContext } from '../../../../../store/ProductItemContext'
import Input from './Input'
import ItemSection from './ItemSection'

const findItem = (context,id,set) => {
  const item = context.items.find(i => i._id === id)
  set(item)
}

const ProductSection = ({ proId, close }) => {
  const [item,setItem] = useState({})
  const [vendor,setVendor] = useState('')
  const [quantity,setQuantity] = useState(0)
  const [pp,setPp] = useState('')
  const [expireDate,setExpireDate] = useState('')
  const [importDate,setImportDate] = useState('')
  const [subItems,setSubItems] = useState([])

  const context = useContext(ProductItemContext)

  useEffect(() => {
    findItem(context,proId,setItem)
  },[])

  return(
    <div className="row col-12 my-1 mx-0 py-2 light-border" style={{background: '#fff'}}>
      <div className="col-12 d-flex justify-content-between">
        <h4 className="m-0" style={{cursor: 'pointer'}} data-toggle="collapse" data-target={`#product${proId}`}>{item.name}</h4>
        <button onClick={e => close(proId)} type="button" className="btn btn-sm btn-danger">cencle</button>
      </div>
      <div className="row col-12 p-0 py-3 m-0 collapse" id={`product${proId}`}>
        <Input type="text" value={vendor} setValue={setVendor} id="vendor" title="Vendor" />
        <Input type="number" value={quantity} setValue={setQuantity} id="quantity" title="Quantity" />
        <Input type="number" value={pp} setValue={setPp} id="pp" title="Purchase Price" />
        <Input type="text" value={expireDate} setValue={setExpireDate} id="expire" title="Expire Date" />
        <Input type="text" value={importDate} setValue={setImportDate} id="import" title="Import Date" />
        {Object.keys(item).length > 0 && <ItemSection id={item._id}/>}
      </div>
    </div>
  )
}
export default memo(ProductSection)
