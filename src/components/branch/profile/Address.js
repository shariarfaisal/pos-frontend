import React,{ useContext } from 'react'
import { ProfileContext } from '../../../store/branch/ProfileContext'


const Address = (props) => {
  const { info } = useContext(ProfileContext)

  return(
    <div className="col-12 p-3 light-border" style={{
      minHeight: '200px'
    }}>
      <h3>{info.name}</h3>
      <p className="m-0 text-muted">@{info.username}</p>
      <p className="m-0"><i className="fa fa-envelope text-info"></i> {info.email}</p>
      <p className="m-0"><i className="fa fa-phone text-info"></i> {info.phone}</p>
    </div>
  )
}
export default Address
