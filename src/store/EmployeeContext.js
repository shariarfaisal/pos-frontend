import React,{ createContext, useState, useEffect } from 'react'
import Custom from './Custom'
const custom = new Custom('employee')


export const EmployeeContext = createContext([])

const EmployeeContextProvider = ({ children }) => {
  const [emploies,setEmploies] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    custom.getItems(setEmploies)
    setReload(false)
  },[reload])


  return (
    <EmployeeContext.Provider value={{
        emploies,
        setEmploies,
        setReload,
        getPost: custom.getPost
    }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider
