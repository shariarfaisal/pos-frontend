import React,{ useState, Fragment } from 'react'
import CreateSubItem from './CreateSubItem'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SubItemComponent = ({ _id, item, quantity, code, itemId, requestId, status }) => {

  const getRemoveSubItem = async (e) => {
    const confirm = window.confirm('Are you sure you want to delete this item?')
    if(confirm){
      const del = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}/${itemId}/${_id}`)
      if(del){
        console.log(del.data);
      }
    }
  }


  return (
    <div className="col-md-6 col-lg-6 col-xl-12 my-2">
      <div className="gray-border bg-white">
        <div className="d-flex justify-content-between">
          <p className="mb-0">{item.name} <small>@{item.code}</small></p>
          {(status === 'create' || status === 'pending') && <i onClick={getRemoveSubItem} className="fa fa-trash text-muted text-red-h ml-4 pointer"></i>}
        </div>
        <small className="text-muted"> Quantity <span className="badge badge-info">{quantity}</span></small>
      </div>
    </div>
  )
}

const ItemBlock = ({ subItems, _id, item, quantity, status }) => {
  const [createMode,setCreateMode] = useState(false)
  const [items,setItems] = useState(subItems)
  const { requestId } = useParams()

  const getRemoveItem = async () => {
    const confirm = window.confirm('Are you sure you want to delete this item?')
    if(confirm){
      const del = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}/${_id}`)
      if(del){
        console.log(del.data);
      }
    }
  }

  return (
    <div className="col-xl-6 my-2 item-block">
      <div className="gray-border py-2">
        <div className=" d-flex justify-content-between align-items-center">
          <p className={`mb-0 ${items.length > 0 ? 'pb-2' : ''}`}>
            {item.name} <small className="text-muted">@{item.code}</small>
            {quantity > 0 && <small className="badge badge-warning">{quantity}</small>}
          </p>
          {(status === 'create' || status === 'pending') && <div className="">
            <i onClick={e => setCreateMode(true)} className="fa fa-plus text-muted mx-2 pointer text-green-h"></i>
            <i onClick={getRemoveItem} className="fa fa-trash text-muted mx-2 pointer text-red-h"></i>
          </div>}
        </div>
        {createMode && <CreateSubItem items={items} setItems={setItems} itemId={_id} setCreateMode={setCreateMode} />}
        {items.length > 0 && <div className="pt-3 row scroll" style={{maxHeight: '300px',overflowY: 'auto'}}>
          {items.map((sub,i) => <SubItemComponent status={status} requestId={requestId} itemId={_id} key={i} {...sub}/> )}
        </div>}
      </div>
    </div>
  )
}

export default ItemBlock
