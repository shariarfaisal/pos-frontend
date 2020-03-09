import React from 'react'
import Core from '../../layouts/Core'
import TypesBody from '../../components/ownar/employee/Types'
import EmployeeTypeContextProvider from '../../store/EmployeeTypeContext'


const Types = (props) => {
return(
  <Core>
    <EmployeeTypeContextProvider>
      <div className="employee-create">
        <div className="row justify-content-center">
            <TypesBody />
        </div>
      </div>
    </EmployeeTypeContextProvider>
  </Core>
  )
}
export default Types
