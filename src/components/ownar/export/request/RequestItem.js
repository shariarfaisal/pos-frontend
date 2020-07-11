import React from 'react'
import RequestSubItem from './RequestSubItem'


const RequestItem = ({ item, quantity, subItems }) => {
  return(
    <div className="col-lg-6 my-2">
      <div className="gray-border light-shadow">
        <div className="item-header">
          <h5>{item.name}</h5>
          {quantity > 0 && <p>Quantity: <span className="badge badge-warning">{quantity}</span></p>}
        </div>
        <div className="row p-2">
          {
            subItems.map((item) => <RequestSubItem key={item._id} {...item} />)
          }
        </div>
      </div>
    </div>
  )
}
export default RequestItem
