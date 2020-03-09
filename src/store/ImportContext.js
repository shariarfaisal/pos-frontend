import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
import Custom from './Custom'
const custom = new Custom('import')

export const ImportContext = createContext({})

const ImportContextProviver = ({ children }) => {
  const [imports,setImports] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    custom.getItems(setImports)
    setReload(false)
  },[reload])

  return(
    <ImportContext.Provider value={{
      imports,
      setImports,
      setReload,
      getPost: custom.getPost,
      import: custom.getItem
    }}>
      { children }
    </ImportContext.Provider>
  )
}

export default ImportContextProviver
