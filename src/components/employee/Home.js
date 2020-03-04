import React,{ useState, useEffect, useContext } from 'react'
import { EmployeeContext } from '../../store/EmployeeContext'
import ProfileItem from './ProfileItem'
import EmployeeSearch from './EmployeeSearch'


const Home = (props) => {
  const context = useContext(EmployeeContext)

  return(
    <div className="col-lg-10 employee-home">
      <div className="list-group">
        <EmployeeSearch />

        {context && context.emploies.map((employee,i) => {
          return <ProfileItem key={i} {...employee} />
        })}


      </div>
    </div>
  )
}





export default Home
