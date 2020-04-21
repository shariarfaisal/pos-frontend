import React,{ createContext, useState } from 'react'
import route from '../../../action/route'

export const EmployeeLocalContext = createContext()

const EmployeeLocalContextProvider = ({ children }) => {
  const [emploies,setEmploies] = useState(null)

  const getEmploies = async () => {
    const res = await route({ endpoint: '/employee', data:{}, req: 'get' })
    if(res){
      setEmploies(res)
    }
  }

  const getEmployee = async (id) => {
    const res = await route({ endpoint: `/employee/${id}`, data:{}, req: 'get' })
    if(res) return res
  }

  const activeHandler = async ({ id, active }) => {
    const get = await route({ endpoint: `/employee/${id}/active`, data:{ active }, req: 'put'})
    if(get) return get
  }




  return(
    <EmployeeLocalContext.Provider value={{
      emploies, setEmploies, getEmploies, getEmployee, activeHandler
    }}>
      { children }
    </EmployeeLocalContext.Provider>
  )
}

export default EmployeeLocalContextProvider
