import React from 'react'
import Core from '../../layouts/Core'
import Home from '../../components/employee/Home'


const Employee = (props) => {
return(
  <Core>
    <div className="employee-create">
      <div className="row justify-content-center">
          <Home />
      </div>
    </div>
  </Core>
  )
}
export default Employee
