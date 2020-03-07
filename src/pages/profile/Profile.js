import React from 'react'
import Core from '../../layouts/Core'
import ProfileContextProvider from '../../store/ProfileContext'
import Address from '../../components/ownar/profile/Address'


const Profile = (props) => {
  return(
    <ProfileContextProvider>
      <Core>
        <div className="employee-create">
          <Address />
        </div>
      </Core>
    </ProfileContextProvider>
)
}
export default Profile
