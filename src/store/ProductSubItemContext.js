import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Custom from './Custom'
const custom = new Custom('subItem')


export const ProductSubItemContext = createContext({})


const ProductSubItemContextProvider = ({ children }) => {
  const { itemId } = useParams()
  const [subItems,setSubItems] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    custom.getItems(setSubItems,`/${itemId}/item`)
    setReload(false)
  },[reload])


  return(
    <ProductSubItemContext.Provider value={{
      subItems,
      setSubItems,
      setReload,
      getPost: custom.getPost
    }}>
      {children}
    </ProductSubItemContext.Provider>
  )
}

export default ProductSubItemContextProvider
