import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
const endpoint = 'http://localhost:1000/api/employee'

const getEmploies = async (set) => {
  const data = await axios.get(endpoint)
  if(data){
    set(data.data)
  }
}

const getPost = async (data) => {
  let [success,error,result] = ['','','']
  try{
    result = await axios.post(endpoint,data)
    if(result){
      success = `${result.data.msg}'s account created!`
    }
  }catch(err){
    error = err.response.data
  }

  return {success,error,data: result}
}


export const EmployeeContext = createContext([])

const EmployeeContextProvider = ({ children }) => {
  const [emploies,setEmploies] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    getEmploies(setEmploies)
    setReload(false)
  },[reload])


  return (
    <EmployeeContext.Provider value={{ emploies, getPost }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider
