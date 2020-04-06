import React,{ useContext } from 'react'
import { ExportRequestContext } from './ExportRequestContext'


const SubItemBlock = ({ _id, item, quantity, code, itemId }) => {
  const { getRemoveSubItem, requestId, request:{ status }, removeSubItem } = useContext(ExportRequestContext)
  return (
    <div className="col-md-6 col-lg-6 col-xl-12 my-2">
      <div className="gray-border bg-white">
        <div className="d-flex justify-content-between">
          <p className="mb-0">{item.name} <small>@{item.code}</small></p>
          {status === 'create' && <i onClick={e => getRemoveSubItem({requestId, itemId, subItemId:_id, removeSubItem})} className="fa fa-trash text-muted text-red-h ml-4 pointer"></i>}
        </div>
        <small className="text-muted"> Quantity <span className="badge badge-info">{quantity}</span></small>
      </div>
    </div>
  )
}

export default SubItemBlock
