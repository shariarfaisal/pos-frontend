import React,{ createContext, useState } from 'react'
import route from '../../../../action/route'

export const SubItemLocalContext = createContext()

const SubItemLocalContextProvider = ({ children }) => {
  const [subItems,setSubItems] = useState(null)
  const [item,setItem] = useState(null)
  const [subItem, setSubItem] = useState(null)

  const getSetSubItem = async (id) => {
    const get = await route({endpoint:`/subItem/${id}`, data: {}, req: 'get'})
    if(get.data){
      setSubItem(get.data)
    }
  }

  const getUpdateItem = async (id,data) => {
    const get = await route({ endpoint: `/item/${id}`, data, req: 'put'})
    if(get.data){
      item.name = get.data.name
      item.description = get.data.description
      setItem({...item})
    }
    return get
  }

  const getUpdateSubItem = async (id,data) => {
    const get = await route({ endpoint: `/subItem/${id}`, data, req: 'put'})
    if(get.data){
      subItem.name = get.data.name
      subItem.description = get.data.description
      setSubItem({...subItem})
    }
    return get
  }

  const getDeleteItem = (id) => {
    return route({ endpoint: `/item/${id}`,data: {}, req: 'delete'})
  }

  const getDeleteSubItem = (id) => {
    return route({ endpoint: `/subItem/${id}`,data: {}, req: 'delete'})
  }

  const getSetItem = async (id) => {
    const get = await route({endpoint:`/item/${id}`, data: {}, req: 'get'})
    if(get.data){
      setItem(get.data)
    }
  }

  const getSetSubItems = async (id) => {
     const get = await route({endpoint:`/subItem/${id}/item`, data: {}, req: 'get'})
     if(get.data){
       setSubItems(get.data)
     }
  }


  const createSubItem = async (data) => {
    const get = await route({endpoint: `/subItem`,data, req: 'post'})
    if(get.data){
      subItems.push(get.data)
      setSubItems([...subItems])
    }
    return get
  }

  return(
    <SubItemLocalContext.Provider value={{
      subItems,
      item,
      subItem,
      getSetItem,
      getSetSubItems,
      getSetSubItem,
      createSubItem,
      getUpdateItem,
      getUpdateSubItem,
      getDeleteItem,
      getDeleteSubItem
    }}>
      { children }
    </SubItemLocalContext.Provider>
  )
}
export default SubItemLocalContextProvider
