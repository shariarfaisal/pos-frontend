import React,{ createContext, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Custom from './Custom'
const custom = new Custom('product')


const getProductItems = async (id,set) => {
  const items = await axios.get(`${custom.link}/${id}/items`)
  if(items){
    set(items.data)
  }
}

export const ProductContext = createContext({})

const ProductContextProvider = ({ children, match }) => {
  const [products,setProducts] = useState([])
  const [product,setProduct] = useState({})
  const [reload,setReload] = useState(false)

  useEffect(() => {
    custom.getItems(setProducts,`/category/${match.params.catId}`)
    setReload(true)
  },[reload])

  return (
    <ProductContext.Provider value={{
      products,
      product: custom.getItem,
      setProducts,
      setReload,
      getPost: custom.getPost,
      items: getProductItems
    }}>
      { children }
    </ProductContext.Provider>
  )
}


export default withRouter(ProductContextProvider)
