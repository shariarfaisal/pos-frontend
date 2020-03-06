import React from 'react'
import Core from '../../layouts/Core'
import BranchesBody from '../../components/branch/Branches'
import BranchContextProvider from '../../store/BranchContext'

const Branches = (props) => {
  return(
    <BranchContextProvider>
      <Core>
        <div className="branches">
          <div className="row justify-content-center">
            <BranchesBody />
          </div>
        </div>
      </Core>
    </BranchContextProvider>
  )
}

export default Branches
