import React from 'react'

const VendorItem = ({ _id, name, email, phone }) => {
  return (
    <div className="list-group-item light-border p-3 my-2 rounded-0">
      <h4><a className="text-info" href={`/vendor/${_id}`}>{name}</a></h4>
      <small className="text-muted d-block"> <i className="fa fa-phone text-info"></i> {phone}</small>
      <small className="text-muted d-block"> <i className="fa fa-envelope text-info"></i> {email}</small>
    </div>
  )
}

export default VendorItem
