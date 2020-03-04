import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'


const getTypes = async (set) => {
  const data = await axios.get('http://localhost:1000/api/employeeType')
  if(data){
    set(data.data)
  }
}

const getDelete = async (id) => {
  let [success,error, deleted ] = ['','']
  try{
    deleted = await axios.delete(`http://localhost:1000/api/employeeType/${id}`)
    if(deleted){
      error = ''
      success = 'Successfully deleted!'
    }
  }catch(err){
    error = err.response.data.msg
  }

  return { success, error, data: deleted}
}

const getPost = async (data) => {
  let [success,error,type] = ['','','']
  try{
    type = await axios.post('http://localhost:1000/api/employeeType/',data)
    if(type){
      error = ''
      success = `${type.data.name} type created!`
    }
  }catch(err){
    success = ''
    error = err.response.data.msg
  }
  return { success, error, data: type}
}

const getUpdate = async (id,value) => {
  let [success,error, updated] = ['','']
  try{
    updated = await axios.put(`http://localhost:1000/api/employeeType/${id}`,value)
    if(updated){
      error = ''
      success = 'Data Updated!'
    }
  }catch(err){
    success = ''
    error = err.response.data.msg
  }
  return { success, error, data: updated }
}

const getType = async (id,set) => {
  let [success,error, type ] = ['','']
  try{
    type = await axios.get(`http://localhost:1000/api/employeeType/${id}`)
    if(type){
      success = 'ok!'
    }
  }catch(err){
    error = err.response.data
  }
  return { success, error, data: type }
}


export const EmployeeTypeContext = createContext({})

const EmployeeTypeContextProvider = ({ children }) => {
  const [employeeTypes,setEmployeeTypes] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    getTypes(setEmployeeTypes)
    setReload(false)
  },[reload])



  return(
    <EmployeeTypeContext.Provider value={{ employeeTypes, setReload, getDelete, getPost, getUpdate, getType }} >
      {children}
    </EmployeeTypeContext.Provider>
  )
}


export default EmployeeTypeContextProvider
