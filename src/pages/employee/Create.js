import React from 'react'
import Core from '../../layouts/Core'
import CreateBody from '../../components/ownar/employee/Create'
import EmployeeTypeContextProvider from '../../store/EmployeeTypeContext'
import EmployeeContextProvider from '../../store/EmployeeContext'


const Create = (props) => {
return(
  <EmployeeTypeContextProvider>
    <EmployeeContextProvider>
      <Core>
        <div className="employee-create">
          <div className="row justify-content-center">
              <CreateBody />
          </div>
        </div>
      </Core>
    </EmployeeContextProvider>
  </EmployeeTypeContextProvider>
  )
}
export default Create
