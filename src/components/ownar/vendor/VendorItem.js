import React from 'react'

const VendorItem = ({ _id, name, email, phone, address }) => {
  return (
    <div className="col-md-6 col-xl-4 my-3">
      <div className="p-3 light-border">
        <h4><a className="text-info" href={`/vendor/${_id}`}>{name}</a></h4>
        <p className="m-0 text-muted"><i className="fa text-info fa-envelope"></i> {email}</p>
        <p className="m-0 text-muted"><i className="fa text-info fa-phone"></i> {phone}</p>
        <div className="p-2 mt-3 text-muted border rounded" style={{background: '#ffffff'}}>
          <small>{address}</small>
        </div>
      </div>
    </div>
  )
}

export default VendorItem
