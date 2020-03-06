import React,{ useContext } from 'react'
import { BranchContext } from '../../store/BranchContext'

const BranchItem = ({ name, username, email, address, phone }) => {
  return (
    <div className="col-md-6 col-xl-4 my-3">
      <div className="p-3 light-border">
        <h4>{name}</h4>
        <small className="text-muted">@{username}</small>
        <p className="m-0 text-muted"><i className="fa text-info fa-envelope"></i> {email}</p>
        <p className="m-0 text-muted"><i className="fa text-info fa-phone"></i> {phone}</p>
        <div className="p-2 mt-3 text-muted border rounded" style={{background: '#ffffff'}}>
          <small>{address}</small>
        </div>
      </div>
    </div>
  )
}

const Branches = (props) => {
  const context = useContext(BranchContext)

  return(
    <div className="col-12 p-3">
      <div className="row">
        {context.branches.map((b,i) => <BranchItem key={i} {...b} /> )}
      </div>
    </div>
  )
}
export default Branches
