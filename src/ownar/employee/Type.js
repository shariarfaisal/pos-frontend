import React from 'react'
import Core from '../../layouts/Core'
import TypeBody from '../../components/ownar/employee/Type'
import EmployeeTypeContextProvider from '../../store/EmployeeTypeContext'


const Type = (props) => {
return(
  <Core>
    <EmployeeTypeContextProvider>
      <div className="employee-create">
        <div className="row justify-content-center">
            <TypeBody />
        </div>
      </div>
    </EmployeeTypeContextProvider>
  </Core>
  )
}
export default Type
