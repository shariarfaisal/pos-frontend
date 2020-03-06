import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Custom from './Custom'
const custom = new Custom('vendor')


export const VendorContext = createContext({})


const VendorContextProvider = ({ children }) => {
  const [vendors,setVendors] = useState([])
  const [reload,setReload] = useState()

  useEffect(() => {
    custom.getItems(setVendors)
  },[reload])

  return(
    <VendorContext.Provider value={{
      vendors,
      setVendors,
      setReload,
      getPost: custom.getPost
    }}>
      { children }
    </VendorContext.Provider>
  )
}

export default VendorContextProvider
