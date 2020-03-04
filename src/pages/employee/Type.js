import React from 'react'
import Core from '../../layouts/Core'
import Type from '../../components/employee/Type'
import TypeItems from '../../components/employee/TypeItems'
import EmployeeTypeContextProvider from '../../store/EmployeeTypeContext'


const Employee = (props) => {
return(
  <Core>
    <EmployeeTypeContextProvider>
      <div className="employee-create">
        <div className="row justify-content-center">
            <Type />
            <TypeItems size="col-md-10 col-lg-8"/>
        </div>
      </div>
    </EmployeeTypeContextProvider>
  </Core>
  )
}
export default Employee
