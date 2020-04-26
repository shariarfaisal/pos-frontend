import React,{ createContext, useState } from 'react'
import route from '../../../../action/route'

export const ItemLocalContext = createContext()

const ItemLocalContextProvider = ({ children }) => {
  const [product,setProduct] = useState(null)
  const [brands,setBrands] = useState(null)

  const createItem = async (data) => {
    const get = await route({endpoint: `/item`, data, req: 'post'})
    if(get.data){
      brands[get.data.brand].items.push(get.data)
      setBrands({...brands})
    }
    return get
  }

  const getUpdateItemName = async (id,data) => {
    const get = await route({ endpoint: `/item/${id}/name`, data, req: 'put'})
    if(get.data){
      const brand = brands[get.data.brand]
      const item = brand.items.find(i => i._id === id)
      item.name = data.name
      setBrands({...brands})
    }
    return get
  }

  const getItemsByBrand = async ({ brandId, proId }) => {
    const get = await route({endpoint: `/item/${brandId}/${proId}/bandp`, data: {}, req:'get'})
    if(get.data){
      brands[brandId].items = get.data
      setBrands({...brands})
    }
  }

  const getSetBrands = async () => {
    const get = await route({endpoint: `/brand`, data: {}, req:'get'})
    if(get.data){
      const res = get.data.reduce((a,b) => {
        a[b._id] = b
        return a
      },{})
      setBrands(res)
    }
  }

  const getSetProduct = async (id) => {
    const get = await route({endpoint: `/product/${id}`, data: {}, req:'get'})
    if(get.data){
      setProduct(get.data)
    }
  }

  return(
    <ItemLocalContext.Provider value={{
      product,
      brands,
      getSetProduct,
      getSetBrands,
      getItemsByBrand,
      getUpdateItemName,
      createItem
    }}>
      { children }
    </ItemLocalContext.Provider>
  )
}
export default ItemLocalContextProvider
