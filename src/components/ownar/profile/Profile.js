import React from 'react'
import Address from './Address'
import ProfileLocalContextProvider from './ProfileLocalContext'

const Profile = (props) => {
return(
  <ProfileLocalContextProvider>
    <div className="col-xl-11">
      <Address />
    </div>
  </ProfileLocalContextProvider>
  )
}
export default Profile
