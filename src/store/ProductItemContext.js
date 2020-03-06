import React,{ createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Custom from './Custom'
const custom = new Custom('item')

const getItems = async (id,set) => {
  const items = await axios.get(`${custom.link}/${id}/product`)
  if(items){
    set(items.data)
  }
}

export const ProductItemContext = createContext({})

const ProductItemContextProvider = ({ children, match }) => {
  const [items,setItems] = useState([])
  const [reload,setReload] = useState(false)

  useEffect(() => {
    getItems(match.params.proId,setItems)
    setReload(true)
  },[reload])

  return (
    <ProductItemContext.Provider value={{
      items,
      item: custom.getItem,
      setItems,
      setReload,
      getPost: custom.getPost
    }}>
      { children }
    </ProductItemContext.Provider>
  )
}

export default withRouter(ProductItemContextProvider)
