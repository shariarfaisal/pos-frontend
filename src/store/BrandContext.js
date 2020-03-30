import React,{ createContext, useState, useEffect } from 'react'
import Custom from './Custom'
const custom = new Custom('brand')


export const BrandContext = createContext({})

const BrandContextProvider = ({ children }) => {
  const [brands,setBrands] = useState([])
  const [reload,setReload] = useState(true)

  useEffect(() => {
    custom.getItems(setBrands)
    setReload(false)
  },[reload])

  return (
    <BrandContext.Provider value={{
      brands,
      setBrands,
      setReload,
      getPost: custom.getPost,
      brand: custom.getItem
    }}>
      { children }
    </BrandContext.Provider>
  )
}

export default BrandContextProvider
