import React,{ useEffect, useContext } from 'react'
import { EmployeeLocalContext } from './EmployeeLocalContext'
import ProfileItem from './ProfileItem'

const Emploies = (props) => {
  const { emploies, setEmploies, getEmploies, activeHandler } = useContext(EmployeeLocalContext)

  useEffect(() => {
    getEmploies(setEmploies)
  },[])

  return(
    <div className="list-group">
      {emploies && emploies.data && emploies.data.map((employee,i) => {
        return <ProfileItem activeHandler={activeHandler} key={i} {...employee} />
      })}
    </div>
  )
}
export default Emploies
