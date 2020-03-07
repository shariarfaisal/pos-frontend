import React,{ useContext } from 'react'
import { ProfileContext } from '../../../store/ProfileContext'


const Address = (props) => {
  const { info } = useContext(ProfileContext)

  return(
    <div className="profile-address light-border" style={{
      minHeight: '300px'
    }}>
      <h3>{info.name} <small className="text-muted">#{info.type ? info.type.name: ''}</small> </h3>
      <p className="m-0 text-muted">@{info.username}</p>
      <p className="m-0"><i className="fa fa-envelope text-info"></i> {info.email}</p>
      <p className="m-0"><i className="fa fa-phone text-info"></i> {info.phone}</p>
    </div>
  )
}
export default Address
