import React from 'react'
import Core from '../../layouts/Core'
import CreateBody from '../../components/employee/Create'

const Create = (props) => {
return(
  <Core>
    <div className="employee-create">
      <div className="row justify-content-center">
          <CreateBody />
      </div>
    </div>
  </Core>
  )
}
export default Create
