import React from 'react'
import Core from '../../layouts/Core'
import Type from '../../components/employee/Type'
import EmployeeTypeContextProvider from '../../store/EmployeeTypeContext'


const Employee = (props) => {
return(
  <Core>
    <EmployeeTypeContextProvider>
      <div className="employee-create">
        <div className="row justify-content-center">
            <Type />
        </div>
      </div>
    </EmployeeTypeContextProvider>
  </Core>
  )
}
export default Employee
