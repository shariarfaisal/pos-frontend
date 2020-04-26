import React,{ createContext, useState } from 'react'
import route from '../../../action/route'


export const ProductLocalContext = createContext()

const ProductLocalContextProvider = ({ children }) => {
  const [products,setProducts] = useState(null)
  const [category,setCategory] = useState(null)

  const getSetProducts = async (catId) => {
    const {data} = await route({endpoint: `/product/category/${catId}`, data:{}, req: 'get'})
    if(data){
      setProducts(data)
    }
  }

  const getSetCategory = async (catId) => {
    const { data } = await route({ endpoint: `/category/${catId}`, data:{}, req:'get'})
    if(data){
      setCategory(data)
    }
  }

  const createProduct = async (data) => {
    const get = await route({ endpoint: '/product', data, req:'post' })
    if(get.data){
      products.push(get.data)
      setProducts([...products])
    }
    return get
  }

  const getUpdate = async (id,data) => {
    const get = await route({ endpoint: `/product/${id}`, data, req: 'put'})
    if(get.data){
      const pro = products.find(i => i._id === id)
      pro.name = data.name
      setProducts([...products])
    }
    return get
  }

  const getDelete = async (id) => {
    const get = await route({ endpoint: `/product/${id}`,data: {}, req: 'delete'})
    if(get.data){
      const proIndex = products.findIndex(i => i.id === id)
      products.splice(proIndex,1)
      setProducts([...products])
    }
    return get
  }

  return(
    <ProductLocalContext.Provider value={{
      products, getSetProducts, getSetCategory, category, createProduct, getDelete, getUpdate
    }}>
      { children }
    </ProductLocalContext.Provider>
  )
}
export default ProductLocalContextProvider
