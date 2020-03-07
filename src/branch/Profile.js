import React from 'react'
import BranchLayout from '../layouts/BranchLayout'
import ProfileContextProvider from '../store/branch/ProfileContext'
import Address from '../components/branch/profile/Address'

const Profile = (props) => {
  return(
    <ProfileContextProvider>
      <BranchLayout>
        <div className="employee-create">
          <div className="row justify-content-center p-3">
            <Address />
          </div>
        </div>
      </BranchLayout>
    </ProfileContextProvider>
  )
}

export default Profile
