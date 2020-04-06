import React,{ createContext, useState, useEffect } from 'react'
import Custom from './Custom'
const custom = new Custom('category')


export const CategoryContext = createContext({})


const CategoryContextProvider = ({ children }) => {
  const [categories,setCategories] = useState([])
  const [reload,setReload] = useState(false)

  useEffect(() => {
    custom.getItems(setCategories)
    setReload(false)
  },[reload])

  return(
    <CategoryContext.Provider value={{
        categories,
        setCategories,
        setReload,
        getPost: custom.getPost,
        category: custom.getItem,
        getDelete: custom.getDelete
    }}>
      {children}
    </CategoryContext.Provider>
  )
}


export default CategoryContextProvider
