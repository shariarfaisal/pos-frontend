import React,{ useEffect, useState, createContext } from 'react'
import Custom from './Custom'
const custom = new Custom('branch')

export const BranchContext = createContext({})

const BranchContextProvider = ({ children }) => {
  const [branches,setBranches] = useState([])
  const [reload,setReload] = useState(false)

  useEffect(()=> {
    custom.getItems(setBranches)
    setReload(true)
  },[reload])

  return(
    <BranchContext.Provider value={{
      branches,
      setBranches,
      setReload,
      getPost: custom.getPost
    }}>
      { children }
    </BranchContext.Provider>
  )
}

export default BranchContextProvider
