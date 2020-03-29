import React from 'react'
import timeConverter from '../../../utils/timeConverter'


const SubItem = ({ _id, item, quantity, exports: exp, expireDate, pp }) => {
  return(
    <div className="col-md-6 col-lg-4 col-xl-3 my-3">
      <div className="light-border" style={{background:'#ffffff'}}>
        <p className="mb-2 border-bottom pb-1 h6">{item.name}</p>
        <small className="d-block">Imported: <span className="badge badge-info">{quantity+exp}</span></small>
        <small className="d-block">Quantity: <span className="badge badge-info">{quantity}</span></small>
        <small className="d-block">Purchase price: <span className="badge badge-info">{ pp }</span></small>
        <small className="d-block">Exports: <span className="badge badge-info">{ exp }</span></small>
        {expireDate && <small>Expire Date: {timeConverter(expireDate)}</small>}
      </div>
    </div>
  )
}


export default SubItem
