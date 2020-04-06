import React from 'react'

const ProfileItem = ({ _id, name, email, phone, username}) => {
  return (
    <div className="profile-item list-group-item d-flex align-items-center my-2 gray-border">
      <div className="left">
        <img src="img/faisal.jpeg" alt="" className="rounded" width="100px"/>
      </div>
      <div className="info px-3">
        <p className="m-0 py-0"><a className="text-dark" href={`/employee/${_id}`}>{name}</a></p>
        <small className="text-muted">@{username}</small>
        <div className="d-flex align-items-center">
          <i className="fa fa-phone text-info"></i>
          <p className="m-0 ml-2">{phone}</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="fa fa-envelope text-info"></i>
          <p className="m-0 ml-2">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileItem
