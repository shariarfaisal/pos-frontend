import React from 'react'
import EmployeeSearch from './EmployeeSearch'
import Emploies from './Emploies'
import EmployeeLocalContextProvider from './EmployeeLocalContext'


const Home = (props) => {
  return(
    <EmployeeLocalContextProvider>
      <div className="col-lg-10 employee-home">
        <EmployeeSearch />
        <Emploies />
      </div>
    </EmployeeLocalContextProvider>
  )
}

export default Home
