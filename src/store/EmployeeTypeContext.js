import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
import Custom from './Custom'
const custom = new Custom('employeeType')


export const EmployeeTypeContext = createContext({})

const EmployeeTypeContextProvider = ({ children }) => {
  const [employeeTypes,setEmployeeTypes] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    custom.getItems(setEmployeeTypes)
    setReload(false)
  },[reload])



  return(
    <EmployeeTypeContext.Provider value={{
        employeeTypes,
        setEmployeeTypes,
        setReload,
        getDelete: custom.getDelete,
        getPost: custom.getPost,
        getUpdate: custom.getUpdate,
        getType: custom.getItem
    }}>
      {children}
    </EmployeeTypeContext.Provider>
  )
}


export default EmployeeTypeContextProvider
