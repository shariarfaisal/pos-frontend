import React,{ useContext } from 'react'
import { ExportRequestContext } from './ExportRequestContext'


const ItemBlockInfo = ({ item, itemId, itemLength, setCreateMode, quantity}) => {
  const { request:{ status }, requestId, getRemoveItem, removeItem } = useContext(ExportRequestContext)

  return(
    <div className=" d-flex justify-content-between align-items-center">
      <p className={itemLength > 0 ? 'mb-0 pb-2' : 'mb-0'}>
        {item.name} <small className="text-muted">@{item.code}</small>
        {quantity > 0 && <small className="badge badge-warning">{quantity}</small>}
      </p>
      {status === 'create' && <div className="">
        <i onClick={e => setCreateMode(true)} className="fa fa-plus text-muted mx-2 pointer text-green-h"></i>
        <i onClick={e => getRemoveItem({requestId, itemId, removeItem})} className="fa fa-trash text-muted mx-2 pointer text-red-h"></i>
      </div>}
    </div>
  )
}

export default ItemBlockInfo
