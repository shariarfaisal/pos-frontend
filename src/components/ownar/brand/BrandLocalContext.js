import React,{ createContext, useState } from 'react'
import route from '../../../action/route'


export const BrandLocalContext = createContext()

const BrandLocalContextProvider = ({ children }) => {
  const [brands,setBrands] = useState(null)
  const [brand,setBrand] = useState(null)
  const [items,setItems] = useState(null)
  const [products,setProducts] = useState(null)

  const getSetProducts = async () => {
    const get = await route({endpoint: `/product`,data: {}, req: 'get'})
    if(get.data){
      setProducts(get.data)
    }
  }

  const addProductIntoBrand = async (id,data) => {
    const get = await route({endpoint: `/brand/${id}/product`,data, req: 'post'})
    if(get.data){
      brand.products.push(get.data)
      setBrand({...brand})
    }
    return get
  }

  const getItemsByBrand = async (id) => {
    const get = await route({ endpoint: `/item/${id}/brand`, data: {}, req: 'get'})
    if(get.data){
      setItems(get.data)
    }
  }

  const createBrand = async (data) => {
    const get = await route({ endpoint: `/brand`, data, req: 'post'})
    if(get.data){
      brands.push(get.data)
      setBrands([...brands])
    }
    return get
  }

  const getSetBrands = async () => {
    const get = await route({endpoint: `/brand`,data: {}, req: 'get'})
    if(get.data){
      setBrands(get.data)
    }
  }

  const getSetBrand = async (id) => {
    const get = await route({endpoint: `/brand/${id}`,data: {}, req: 'get'})
    if(get.data){
      setBrand(get.data)
    }
  }

  return(
    <BrandLocalContext.Provider value={{
      brands,
      items,
      getSetBrands,
      brand,
      getSetBrand,
      createBrand,
      getItemsByBrand,
      addProductIntoBrand,
      getSetProducts,
      products
    }}>
      { children }
    </BrandLocalContext.Provider>
  )
}
export default BrandLocalContextProvider
