import React,{ useState } from 'react'

const ProfileItem = ({ _id, name, email, phone, username, type, active: atv, activeHandler }) => {
  let [active,setActive] = useState(atv)

  const activeChanger = async (e) => {
    const get = await activeHandler({ id: _id, active: !active})
    if(get){
      setActive(get.data.active)
    }
  }

  return (
    <div className="profile-item list-group-item d-flex align-items-center my-2 gray-border">
      <div className="left">
        <img src="img/faisal.jpeg" alt="" className="rounded" width="100px"/>
      </div>
      <div className="info px-3 w-100">
        <div className="d-flex justify-content-between">
          <p className="m-0 py-0">
            <a className="text-dark" href={`/employee/${_id}`}>{name}</a>
            <small className="text-muted">@{username}</small>
          </p>
          <div>
            {active && <button onClick={activeChanger} type="button" className="font-6 btn btn-sm btn-light border text-muted">Block</button>}
            {!active && <button onClick={activeChanger} type="button" className="font-6 btn btn-sm btn-light border text-muted">Unblock</button>}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <i className="fa fa-phone text-info"></i>
          <p className="m-0 ml-2">{phone}</p>
        </div>
        <div className="d-flex align-items-center">
          <i className="fa fa-envelope text-info"></i>
          <p className="m-0 ml-2">{email}</p>
        </div>
        <p className="mb-0 text-muted">#{type.name}</p>
      </div>
    </div>
  )
}

export default ProfileItem
