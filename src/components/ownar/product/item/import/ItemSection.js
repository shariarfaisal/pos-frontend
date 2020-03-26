import React,{ memo, useEffect, useState } from 'react'
import axios from 'axios'
import CreateSubItem from './CreateSubItem'


const getItems = async (id,set) => {
    const items = await axios.get(`http://localhost:1000/api/subItem/${id}/item`)
    if(items){
      set(items.data)
    }
}


const ItemSection = ({ itemId, _id }) => {
  const [items,setItems] = useState([])
  const [subItemId,setSubItemId] = useState('')

  useEffect(() => {
    getItems(itemId,setItems)
  },[])

  return(
    items.length > 0 && <div className="row col-12 my-4">
      {!subItemId && <div className="col-12 my-3">
        <label htmlFor="addSubItem"><i className="fa fa-plus text-success"></i> Add Sub Item</label>
        <select
          className="form-control pointer"
          id="addSubItem"
          value={subItemId}
          onChange={e => setSubItemId(e.target.value)}
        >
          <option value="">Select A Sub Item Add to Import</option>
          {items.map((item,i) => <option key={i} value={item._id}>{item.name}</option>)}
        </select>
      </div>}
      {subItemId && <CreateSubItem importItemId={_id} setSubItemId={setSubItemId} subItemId={subItemId} />}
    </div>
  )
}
export default memo(ItemSection)
