import React from 'react'

const RequestSubItem = ({ _id, item, quantity }) => { 
  return(
    <div className="col-12 my-1">
      <div className="gray-border bg-white">
        <p className="mb-0">{item.name}</p>
        <small>Quantity: <span className="badge badge-warning">{quantity}</span></small>
      </div>
    </div>
  )
}
export default RequestSubItem
