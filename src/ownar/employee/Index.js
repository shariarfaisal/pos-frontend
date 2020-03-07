import React from 'react'
import Core from '../../layouts/Core'
import Home from '../../components/ownar/employee/Home'
import EmployeeContextProvider from '../../store/EmployeeContext'


const Employee = (props) => {
  return(
    <EmployeeContextProvider>
      <Core>
        <div className="employee-create">
          <div className="row justify-content-center">
            <Home />
          </div>
        </div>
      </Core>
    </EmployeeContextProvider>
  )
}
export default Employee
